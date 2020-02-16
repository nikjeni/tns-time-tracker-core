const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const { userRoutes } = require('./routes/user.routes');
const mongoose = require('mongoose');

var url = process.env.MONGODB_URL;

function db() {
    mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
        .then(() => {
            console.log("connected");
        })
        .catch((err) => { return res.status(500).send("Crashed!!!") })
}
db();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use('/users', userRoutes);

var server_port = process.env.YOUR_PORT || process.env.PORT || 80;
var server_host = process.env.YOUR_HOST || '0.0.0.0';

app.listen(server_port, server_host, () => {
    console.log('Listening on port %d', server_port);
})
