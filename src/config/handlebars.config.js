const handlebars = require('express-handlebars'); 
const helpers = require('../helpers/handlebars.helpers'); 

module.exports = { 
    config: (app) => { 
        app.engine('hbs', handlebars.engine({ 
            extname: 'hbs', 
            helpers: helpers 
        })); 
        app.set('view engine', 'hbs'); 
        app.set('views', 'src/views'); 
    } 
}; 
