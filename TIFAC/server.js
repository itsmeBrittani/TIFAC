const express = require('express');
const mongoose = require('mongoose');
const methodOverride = require('method-override');
const moment = require('moment');
const app = express();
const port = process.env.PORT || 3000;
const dbName = 'TIFAC';
const db = mongoose.connection;

const reportController = require('./controllers/TIFAC.js');

app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(methodOverride('_method'));
app.use('/TIFAC', reportController);
app.use(express.static('public'));

const MONGODB_URI = process.env.MONGODB_URI || `mongodb://localhost:27017/${dbName}`;


mongoose.connect(MONGODB_URI, {useNewUrlParser: true, useUnifiedTopology: true });
db.once('open', () => {
    console.log('connected to mongo');
});

db.on('error', (err) => console.log(err.message + ' is Mongod not running?'));
db.on('connected', () => console.log('mongo connected: ', MONGODB_URI));
db.on('disconnected', () => console.log('mongo disconnected'));



//LISTENER
app.listen(port, () => {
    console.log("Ready for your orders, Goddess!!");
})