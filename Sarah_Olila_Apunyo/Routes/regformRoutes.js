const express = require('express');
const router = express.Router();
const Registration = require('../models/Regform');


// specify what to do when user hit the '/'(home page) route/endpoint
router.get('/regform', (req, res) => {
    res.render('regform', { title: 'Registration form' })
})


// save data to the database
router.post('/regform', async (req, res) => {
    try {       
        const userdetails = new Registration(req.body);
        await userdetails.save()
        
            console.log('save success');
            
        
    }
    catch (err) {
        res.status(400).send('Sorry! Something went wrong.')
        console.log(err)
    }
})


module.exports = router;