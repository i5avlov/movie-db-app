const { Schema, model, Types } = require('mongoose'); 

const memberSchema = new Schema({ 
    firstName: {
        type: String, 
        required: true 
    }, 
    lastName: {
        type: String, 
        required: true 
    }, 
    details: {
        type: String, 
        required: true 
    }, 
    imageUrl: {
        type: String, 
        required: false 
    }, 
    birthDate: {
        type: Date, 
        required: true 
    }, 
    occupation: {
        type: Types.ObjectId, 
        ref: 'Occupation' 
    }

}); 

const Member = model('Member', memberSchema); 

module.exports = Member; 
