const express = require('express');
const app = express();
const { db } = require('./middleware/db');
const cors = require('cors');
const bodyParser = require('body-parser');
const { userRoutes } = require('./routes/user.routes');

app.use(cors());
app.use(db);
app.use(bodyParser.json());
app.use('/users', userRoutes);

app.listen(process.env.PORT | process.env.port | 2000, () => {
    console.log("Connected to server!!!!!");
})