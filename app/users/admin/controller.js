const i18n = require('i18n');
const userService = require('../service');
const response = require("../../common/response");

exports.getUsers = async (req, res) => {
    try {
        let user = await userService.getUsers();
        response.success(res, user);
    } catch (e) {
        console.log("e : ", e);
        response.error(res, e, req);
    }
};

exports.getUserById = async (req, res) => {
    try {
        let id = req.params.id;
        let user = await userService.getUserById(id);
        response.success(res, user);
    } catch (e) {
        console.log("e : ", e);
        response.error(res, e, req);
    }
};

exports.addUser = async (req, res) => {
    try {
        let payload = {
            email: {item : req.body.email , required :true},
            password: {item : req.body.password , required :true} ,
            mobile: {item : req.body.mobile , required :true},
            full_name: {item : req.body.full_name , required :true},
            gender : {item : req.body.gender , required :true},
            date_of_birth : {item : req.body.date_of_birth , required :true , date : true},
            latitude : {item : req.body.latitude , required :false},
            longitude : {item : req.body.longitude , required :false},
            role_id: {item : req.body.role_id , required :true},
            type: {item : req.body.type , required : true},
        }
        let user = await userService.addUser(payload);
        response.success(res, user);
    } catch (e) {
        console.log("e : ", e);
        response.error(res, e, req);
    }
};

exports.deleteUserById = async (req, res) => {
    try {
        let id = req.params.id;
        let user = await userService.deleteUserById(id);
        if(user) {
            response.success(res, {}, "User deleted successfully");
        } else {
            response.error(res, {status : 410, message : "User already deleted!"} , req);
        }
    } catch (e) {
        console.log("e : ", e);
        response.error(res, e, req);
    }
};


exports.updateUserById = async (req, res) => {
    try {
        let id = req.params.id;
        let payload = {
            email: {item : req.body.email , required :true},
            password: {item : req.body.password , required :true} ,
            mobile: {item : req.body.mobile , required :true},
            full_name: {item : req.body.full_name , required :true},
            gender : {item : req.body.gender , required :true},
            date_of_birth : {item : req.body.date_of_birth , required :true , date : true},
            latitude : {item : req.body.latitude , required :false},
            longitude : {item : req.body.longitude , required :false}
        }
        let user = await userService.updateUser(id,payload);
        if(user){
            let data = await userService.getUserById(id);
            response.success(res, data , "User updated successfully");
        }else {
            response.error(res, {status : 410, message : "User already updated"} , req);
        }

    } catch (e) {
        console.log("e : ", e);
        response.error(res, e, req);
    }
};