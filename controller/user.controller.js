const { UserModel } = require('../model/user.model');

module.exports.saveUser = async (req, res, next) => {
    if (await validateUser(req.body) == "") {
        let user = new UserModel(req.body);
        try {
            let result = await user.save();
            if (result) { return res.status(200).send('User saved successfulyy') }
        }
        catch (err) {
            return res.status(500).send("Failed to save");
        }
    } else {
        return res.status(401).send("user already exists");
    }
}

module.exports.login = async (req, res, next) => {
    console.log("requesr", req);
    try {
        let result = await validateUser(req.body);
        console.log(result);
        if (result) {
            return res.status(200).send("Logged in");
        } else {
            return res.status(400).send("Invalid user");
        }
    } catch (err) {
        return res.status(500).failed("login failed");
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

