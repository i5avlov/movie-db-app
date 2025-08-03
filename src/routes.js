const routes = require('express').Router(); 
const categoriesController = require('./controllers/categories.controller');
const genresController = require('./controllers/genres.controller');
const homeController = require('./controllers/home.controller'); 
const membersController = require('./controllers/members.controller');
const occupationsController = require('./controllers/occupations.controller'); 


routes.use(homeController); 
routes.use('/occupations', occupationsController); 
routes.use('/members', membersController); 
routes.use('/genres', genresController); 
routes.use('/categories', categoriesController); 

module.exports = routes; 
