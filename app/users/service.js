let auth = require('../middleware/auth');
const ROLES = require('../common/constants').ROLES;
const Errors = require('../common/exceptions');
const validator = require('./validator');
const userDao = require('./dao');

exports.getUsers = async () => {
    let users = await userDao.getUsers();
    let response = {
        users: users
    }
    return response;
}

exports.getUserById = async (id) => {
    let user = await userDao.getUserById(id);
    let response = {
        user: user
    }
    return response;
}

exports.addUser =  async (payload) => {
    let errors = validator.isDataValid(payload);
    if (errors.length > 0) {
        throw new Errors.InvalidInputException(errors);
    }
    let isEmailExist = await userDao.getByEmail(payload.email);
    if (isEmailExist) {
        throw new Errors.EmailAlreadyExists();
    }
    let isMobileExist = await userDao.getByMobile(payload.mobile);
    if (isMobileExist) {
        throw new Errors.MobileIsExists();
    }
    payload.role_id = ROLES[payload.role_id];
    payload.password = await auth.generatePassword(payload.password);
    let user = await userDao.addUser(payload);
    return user;
}

exports.deleteUserById = async (id) => {
    let user = await userDao.deleteUserById(id);
    let response = user;
    return response;
}
