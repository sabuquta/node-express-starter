const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const Errors = require('../common/exceptions');
const Response = require('../common/response');
const {RESPONSES} = require('../common/constants');

require('dotenv').config()

exports.generateAccessToken = function (email , role) {
    return jwt.sign({email , role}, process.env.TOKEN_SECRET, { expiresIn: '1800d' });
}

exports.generatePassword = async  (password) => {
    return await bcrypt.hash(password, 10);
}
exports.isValidPassword = async  (password , dbPassword) => {
    return await bcrypt.compare(password, dbPassword);
}

exports.authenticateToken = function(req, res, next) {
    const authHeader = req.headers['authorization']
    const token = authHeader && authHeader.split(' ')[1]

    if (token == null) return Response.error(res , {status : 401,code:401 , message : RESPONSES.INVALID_ACCESS_TOKEN})

    jwt.verify(token, process.env.TOKEN_SECRET, (err, user) => {
        console.log(err)

        if (err) return Response.error(res , {status : 403,code:403 , message : RESPONSES.INVALID_ACCESS_TOKEN})

        req.user = user

        next()
    })
}
