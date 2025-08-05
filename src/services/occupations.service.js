const Occupation = require('../models/Occupation'); 

module.exports = { 
    getAll: () => { 
        return Occupation.find({}); 
    }, 

    getById: (occupationId) => { 
        return Occupation.findById(occupationId); 
    }, 

    getByValue: async (occupationTitle) => { 
        const occupation = await Occupation.findOne({ title: occupationTitle }).lean(); 
        if (null === occupation) { 
            throw new Error('No such occupation'); 
        } 

        return occupation; 
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
