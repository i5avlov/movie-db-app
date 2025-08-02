const { Schema, model } = require('mongoose'); 

const castSchema = new Schema({ 
    firstName: {
        type: String, 
        required: true 
    }, 
    middleName: {
        type: String, 
        required: false 
    }, 
    lastName: {
        type: String, 
        required: true 
    }, 
    bio: {
        type: String, 
        required: true 
    }, 
    imageUrl: {
        type: String, 
        required: true 
    }, 
    dateOfBirth: {
        type: Date, 
        required: true 
    }, 
    dateOfLifeEnd: {
        type: Date, 
        required: false 
    }, 

}); 

const Cast = model('Cast', castSchema); 

module.exports = Cast; 
