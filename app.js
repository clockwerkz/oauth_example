const express = require('express');
const authRoutes = require('./routes/auth-routes');
const mongoose = require('mongoose');
const keys = require('./config/keys');


const app = express();


// set up view engine
app.set('view engine', 'ejs');

// connect to mongodb

mongoose.connect(keys.mongodb.dbURI, {
    useNewUrlParser : true,
    useUnifiedTopology: true
}, ()=> {
    console.log('connected to mongodb');
});
mongoose.set('useCreateIndex', true);

//set up routes
app.use('/auth', authRoutes);

// create home route
app.get('/', (req, res)=> {
    res.render('home');
});


app.listen(3000, ()=> {
    console.log('App now listening for requests on port 3000.');
});