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

memberSchema.methods = { 
    // Returns member age 
    getAge: function() { 
        // Today date, month and day 
        const now = new Date(Date.now()); 
        const monthNow = now.getMonth(); 
        const dateNow = now.getDate(); 

        // Member date, month and day of birth 
        const birthdate = new Date(this.birthdate); 
        const monthOfBirth = birthdate.getMonth(); 
        const dateOfBirth = birthdate.getDate(); 

        // Years from member birthdate to today 
        const age = now.getFullYear() - birthdate.getFullYear(); 
        // Member birthday this year not yet celebrated 
        if (monthNow < monthOfBirth || (monthNow === monthOfBirth && dateNow < dateOfBirth)) { 
            age -= 1; 
        } 

        return age; 
    }
}

const Member = model('Member', memberSchema); 

module.exports = Member; 
