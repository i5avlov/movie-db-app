const { Schema, model } = require('mongoose'); 

const occupationSchema = new Schema({ 
    title: {
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

const Occupation = model('Occupation', occupationSchema); 

module.exports = Occupation; 
