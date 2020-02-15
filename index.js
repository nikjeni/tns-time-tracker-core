const express = require('express');
const app = express();
const { db } = require('./middleware/db');
const cors = require('cors');
const bodyParser = require('body-parser');
const { userRoutes } = require('./routes/user.routes');

var url = process.env.MONGODB_URL;

function db() {
    mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
        .then(() => {
            console.log("connected");
        })
        .catch((err) => { return res.status(500).send("Crashed!!!") })
}

app.use(cors());
app.use(db);
app.use(bodyParser.json());
app.use('/users', userRoutes);

app.listen(process.env.PORT | process.env.port | 2000, () => {
    console.log("Connected to server!!!!!");
    db();
})