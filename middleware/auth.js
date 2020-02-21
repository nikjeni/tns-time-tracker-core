const jwt = require('jsonwebtoken');
const config = require('config');

module.exports.jwtVerify = (req, res, next) => {
    if (!req.headers.authorization) {
        return res.status(401).send({ "status": false, "message": "Token required" });
    }

    try {
        // Parse the JWT string and store the result in `payload`.
        // Note that we are passing the key in this method as well. This method will throw an error
        // if the token is invalid (if it has expired according to the expiry time we set on sign in),
        // or if the signature does not match
        let secret_key = config.get('Customer.secretKey');
        let payload = jwt.verify(req.headers.authorization, secret_key);
    } catch (e) {
        if (e instanceof jwt.JsonWebTokenError) {
            // if the error thrown is because the JWT is unauthorized, return a 401 error
            return res.status(401).end()
        }
        // otherwise, return a bad request error
        return res.status(400).end()
    }
    // Finally, return the welcome message to the user, along with their
    // username given in the token
    next();
}