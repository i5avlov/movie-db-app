const Movie = require('../models/Movie'); 

module.exports = { 
    add: (movieData) => { 
        const { title, description, imageUrl, genreIds, categoryId, duration, year } = movieData; 
        
        return Movie.create({ 
            title, 
            description, 
            imageUrl, 
            genre: genreIds, 
            category: categoryId, 
            duration, 
            year 
        }); 
    }, 

}; 