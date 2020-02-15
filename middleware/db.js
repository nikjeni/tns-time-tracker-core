const mongoose = require('mongoose');

module.exports.db = (req, res, next) => {
    mongoose.connect('mongodb://nikhil:nik123@ds117545.mlab.com:17545/nikhilapp', { useNewUrlParser: true, useUnifiedTopology: true })
        .then(() => {
            console.log("connected");
            next();
        })
        .catch((err) => { return res.status(500).send("Crashed!!!") })
}