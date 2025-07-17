const homeController = require('express').Router(); 

// Routes 
homeController.get('/', (req, res) => {
    res.render('home'); 
}); 

module.exports = homeController; 
