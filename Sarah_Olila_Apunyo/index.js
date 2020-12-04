// import express in our project using require key word

//dependencies
const express = require('express');
const mongoose = require('mongoose');
require('dotenv/config');
const bodyParser= require('body-parser');
const path = require('path');
const regformRoutes = require('./routes/regformRoutes');

// create an express application by calling the express() function
// Instantiations
const app = express();

// Database connection
mongoose.connect(process.env.DB_CONNECTION, {
  useUnifiedTopology: true,
   useNewUrlParser: true, 
   useCreateIndex: true,
   useFindAndModify: false
  } );

mongoose.connection 
.on("open", () => { 
  console.log("Mongoose connection open");
 }) 
 .on("error", err => { 
   console.log(`Connection error: ${err.message}`);
  });

// Configurations
app.set('view engine' , 'pug')
app.set('views', './views');

// middleware settings
// Simple request time logger for a specific route
app.use((req, res, next) => {
  console.log('A new request received at ' + Date.now());
  next();
});

app.use(bodyParser.urlencoded({extended: true}))


app.use(express.static(path.join(__dirname, 'public')))
app.use('/', regformRoutes);

  

  // route for errors
  app.get('*', (req, res)=>{
    res.send('Input Error')

  })
// Server listening to port 3000
  app.listen(3000, function() {
    console.log('listening on 3000')
  })










