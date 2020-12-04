const mongoose = require('mongoose');

const RegformSchema = new mongoose.Schema({
    surname: {
        type: String,
        // required: 'Please Enter first name'
    },
    givenname: String,
    birthdate: {
        type: String,
    },
    residence: String,
    occupation: String,
    nationality: String,
    gender: String,
    category: String,
  
     
  });

  module.exports = mongoose.model('Regform', RegformSchema);