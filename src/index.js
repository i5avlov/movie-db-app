const express = require('express'); 
// Configuration imports 
const exp = require('./config/express.config');

const app = express(); 

// Configurations
exp.config(app); 

app.get('/', (req, res) => {
    res.send('Works.'); 
}); 

app.listen(4000, () => console.log('Server listening on port 4000...')); 
