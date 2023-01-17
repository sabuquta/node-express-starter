let auth = require('../middleware/auth');
const ROLES = require('../common/constants').ROLES;
const models = require('../../models/index');
const Errors = require('../common/exceptions');
const validator = require('./validator');
const userDao = require('./dao');
const User = models.users;

exports.login = async (payload) => {
    let errors = validator.isDataValid(payload);
    if (errors.length > 0) {
        throw new Errors.InvalidInputException(errors);
    }

    payload.role_id = ROLES[payload.role_id];
    let user = await User.findOne({where : {email : payload.email , role_id : payload.role_id}});
    console.log("user : " , user);
    if(!user){
        throw new Errors.InvalidEmailOrPasswordException();
    }
    // payload.password = await auth.generatePassword(payload.password);
    console.log(user.password , payload.password);

    let isValid = await auth.isValidPassword(payload.password , user.password);
    console.log("isValid : " , isValid);
    if(!isValid){
        throw new Errors.InvalidEmailOrPasswordException();
    }
    let access_token = await auth.generateAccessToken(payload.email, payload.role_id);
    user = user.toJSON();
    let response = {
        ...user,
        access_token
    };
    return response;
}

exports.signup =  async (payload) => {
    let errors = validator.isDataValid(payload);
    if (errors.length > 0) {
        throw new Errors.InvalidInputException(errors);
    }
    let isEmailExist = await userDao.getByEmail(payload.email);
    if(isEmailExist){
        throw new Errors.EmailAlreadyExists();
    }
    let isMobileExist = await userDao.getByMobile(payload.mobile);
    if(isMobileExist){
        throw new Errors.MobileIsExists();
    }
    payload.role_id = ROLES[payload.role_id];
    payload.password = await auth.generatePassword(payload.password);
    let user = await User.create(payload);
    return user;
}
