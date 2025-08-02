const routes = require('express').Router(); 
const homeController = require('./controllers/home.controller'); 
const occupationsController = require('./controllers/occupations.controller'); 


routes.use(homeController); 
routes.use('/occupations', occupationsController); 

module.exports = routes; 
