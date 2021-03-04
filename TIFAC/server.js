const express = require('express');
const mongoose = require('mongoose');
const methodOverride = require('method-override');
const app = express();
const port = 3000;
const dbName = 'TIFAC';

const reportController = require('./controllers/TIFAC.js');

app.use(express.urlencoded({extended: true}));
app.use(methodOverride('_method'));
app.use('/TIFAC', reportController);
app.use(express.static('public'));


mongoose.connect(`mongodb://localhost:27017/${dbName}`, {useNewUrlParser: true, useUnifiedTopology: true });
mongoose.connection.once('open', () => {
    console.log('connected to mongo');
});



//LISTENER
app.listen(port, () => {
    console.log("Ready for your orders, Goddess!!");
})