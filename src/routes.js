const routes = require('express').Router(); 
const homeController = require('./controllers/home.controller'); 
const membersController = require('./controllers/members.controller');
const occupationsController = require('./controllers/occupations.controller'); 


routes.use(homeController); 
routes.use('/occupations', occupationsController); 
routes.use('/members', membersController); 

module.exports = routes; 
