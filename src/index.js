const express = require('express'); 
const handlebars = require('express-handlebars'); 
// Configuration imports 
const exp = require('./config/express.config');
const hbs = require('./config/handlebars.config');

const app = express(); 

// Configurations 
exp.config(app); 
hbs.config(app); 


// Routes 
app.get('/', (req, res) => {
    res.render('home'); 
}); 


// Server start 
app.listen(4000, () => console.log('Server listening on port 4000...')); 
