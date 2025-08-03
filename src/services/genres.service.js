const Genre = require('../models/Genre'); 

module.exports = { 
    getAll: () => { 
        return Genre.find({}); 
    }, 

    add: (genreData) => { 
        const { name, description, imageUrl } = genreData; 
        
        return Genre.create({ 
            name, description, imageUrl
        }); 
    }, 

    update: () => {

    }, 

    delete: () => {

    }

}; 