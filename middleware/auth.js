const jwt = require('jsonwebtoken');
const config = require('config');

module.exports.jwtVerify = (req, res, next) => {
    let secret_key = config.get('Customer.secretKey');
    let decoded = jwt.verify(req.headers.authorization, secret_key);
    console.log("decoed", decoded);
    next();
}