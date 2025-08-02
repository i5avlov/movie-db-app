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

castSchema.methods = { 
    // Returns cast age 
    getAge: function() { 
        // Today date, month and day 
        const now = new Date(Date.now()); 
        const monthNow = now.getMonth(); 
        const dateNow = now.getDate(); 

        // Cast date, month and day of birth 
        const birthdate = new Date(this.birthdate); 
        const monthOfBirth = birthdate.getMonth(); 
        const dateOfBirth = birthdate.getDate(); 

        // Cast years
        const age = now.getFullYear() - birthdate.getFullYear(); 
        // Cast birthday this year not yet celebrated 
        if (monthNow < monthOfBirth || (monthNow === monthOfBirth && dateNow < dateOfBirth)) { 
            age -= 1; 
        } 

        return age; 
    }
}

const Cast = model('Cast', castSchema); 

module.exports = Cast; 
