const Category = require('../models/Category'); 

module.exports = { 
    add: (categoryData) => { 
        const { name, description, imageUrl } = categoryData; 
        
        return Category.create({ 
            name, description, imageUrl 
        }); 
    }, 

}; 