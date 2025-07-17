const mongoose = require('mongoose'); 

const connection = 'mongodb://localhost:27017'; 
const db = 'movie_db'; 

module.exports = {
    config: async () => { 
        try { 
            await mongoose.connect(connection, { dbName: db }); 
            console.log('Connected to DB.'); 
        } catch (err) { 
            console.log('Connection to DB failed.')
        }
    }
}; 