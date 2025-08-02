const Occupation = require('../models/Occupation'); 

module.exports = { 
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
