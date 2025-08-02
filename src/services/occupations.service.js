const Occupation = require('../models/Occupation'); 

module.exports = { 
    getAll: () => { 
        return Occupation.find({}); 
    }, 

    getById: (occupationId) => { 
        return Occupation.findById(occupationId); 
    }, 

    add: (occupationData) => { 
        const { title, description, imageUrl } = occupationData; 
        
        return Occupation.create({ 
            title, description, imageUrl
        }); 
    }, 

    update: () => {

    }, 

    delete: () => {

    }

}; 
