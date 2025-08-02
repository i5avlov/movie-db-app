const Member = require('../models/Member'); 

module.exports = { 
    getAll: () => { 
        return Member.find({}); 
    }, 

    getById: (memberId) => { 
        return Member.findById(memberId); 
    }, 

    add: (memberData) => { 
        const { firstName, middleName, lastName, imageUrl, bio, birthdate, occupationId } = memberData; 
        
        return Member.create({ 
            firstName, 
            middleName, 
            lastName, 
            imageUrl, 
            bio, 
            dateOfBirth: new Date(birthdate), 
            occupation: occupationId 
        }); 
    }, 

}; 