const models = require('../../models/index');
const Errors = require('../common/exceptions');
const validator = require('./validator');
const User = models.users;


exports.getUsers = async () => {
    let users = await User.findAll();
    return users;
}

exports.getUserById = async (id) => {
    let user = await User.findOne({where : {id : id}});
    return user;
}

exports.getByEmail = async (email) => {
    let user = await User.findOne({where : {email : email}});
    if(!user){
        return false
    }
    return true;
}

exports.getByMobile = async (mobile) => {
    let user = await User.findOne({where : {mobile : mobile}});
    if(!user){
        return false
    }
    return true;
}

exports.addUser = async (payload) => {
    let user = await User.create(payload);
    return user;
}

exports.deleteUserById = async (id) => {
    let user = await User.destroy({where : {id : id}});
    return user;
}