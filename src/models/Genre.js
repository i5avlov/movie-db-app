const { Schema, model } = require('mongoose'); 

const genreSchema = new Schema({ 
    name: {
        type: String, 
        required: true 
    }, 
    description: {
        type: String, 
        required: false 
    }, 
    imageUrl: {
        type: String, 
        required: false 
    }, 
}); 

const Genre = model('Genre', genreSchema); 

module.exports = Genre; 
