require('dotenv').config();
require('./models/Device');
const app = require('./app');
const mongoose = require('mongoose');

mongoose.connect(process.env.DATABASE, { useNewUrlParser: true });
mongoose.Promise = global.Promise;
mongoose.connection
    .on('connected', () => {
        console.log(`Mongoose connection open on ${process.env.DATABASE}`);
    })
    .on('error', (err) => {
        console.log(`Connection error: ${err.message}`);
    });

appPort = process.env.PORT || 3000;

const server = app.listen(appPort, () => {
    console.log(`Express is running on port ${server.address().port}`);
});