const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
require('dotenv').config()

exports.generateAccessToken = function (email , role) {
    return jwt.sign({email , role}, process.env.TOKEN_SECRET, { expiresIn: '1800s' });
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

    if (token == null) return res.sendStatus(401)

    jwt.verify(token, process.env.TOKEN_SECRET, (err, user) => {
        console.log(err)

        if (err) return res.sendStatus(403)

        req.user = user

        next()
    })
}
