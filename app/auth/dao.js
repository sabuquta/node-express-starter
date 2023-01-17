const models = require('../../models/index');
const Errors = require('../common/exceptions');
const validator = require('./validator');
const User = models.users;

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