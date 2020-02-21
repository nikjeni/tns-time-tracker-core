const { UserModel } = require('../model/user.model');
const jwt = require('jsonwebtoken');
const config = require('config');

module.exports.saveUser = async (req, res, next) => {
    if (await validateUser(req.body) == "") {
        let user = new UserModel(req.body);
        try {
            let result = await user.save();
            if (result) { return res.status(200).send({ "status": true, 'message': 'User saved successfulyy' }) }
        }
        catch (err) {
            return res.status(500).send({ "status": false, "message": "Failed to save" });
        }
    } else {
        return res.status(401).send({ "status": false, "message": "user already exists" });
    }
}

module.exports.login = async (req, res, next) => {
    try {
        let result = await validateUser(req.body);
        if (result) {
            let secret_key = config.get('Customer.secretKey');
            let useData = req.body.email;
            let token = jwt.sign({ sub: useData }, secret_key, { expiresIn: '1h' });
            return res.status(200).send({ "message": "Logged in", "token": token });
        } else {
            return res.status(400).send("Invalid user");
        }
    } catch (err) {
        return res.status(500).send("login failed");
    }
}

async function validateUser(user) {
    try {
        let userRes = await UserModel.find({ email: user.email });
        if (userRes.length > 0) {
            return "user already exists"
        } else {
            return "";
        }
    } catch (err) {
    }
}

