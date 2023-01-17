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
            email: req.body.email,
            password: req.body.password,
            mobile: req.body.mobile,
            full_name: req.body.full_name,
            role_id: req.body.role,
            type: req.body.type,
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
            response.success(res, {}, "User Deleted Successfully");
        } else {
            response.error(res, {status : 410, message : "User already Deleted!"} , req);
        }
    } catch (e) {
        console.log("e : ", e);
        response.error(res, e, req);
    }
};