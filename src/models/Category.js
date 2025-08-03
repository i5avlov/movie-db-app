const { Schema, model } = require('mongoose'); 

const categorySchema = new Schema({ 
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

const Category = model('Category', categorySchema); 

module.exports = Category; 
