const Category = require('../models/Category'); 

module.exports = { 
    getAll: () => { 
        return Category.find({}); 
    }, 

    add: (categoryData) => { 
        const { name, description, imageUrl } = categoryData; 
        
        return Category.create({ 
            name, description, imageUrl 
        }); 
    }, 

}; 