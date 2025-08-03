const { Schema, model, Types } = require('mongoose'); 

const memberSchema = new Schema({ 
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
        required: false 
    }, 
    dateOfBirth: {
        type: Date, 
        required: true 
    }, 
    dateOfLifeEnd: {
        type: Date, 
        required: false 
    }, 
    occupation: {
        type: Types.ObjectId, 
        ref: 'Occupation' 
    }

}); 

const Member = model('Member', memberSchema); 

module.exports = Member; 
