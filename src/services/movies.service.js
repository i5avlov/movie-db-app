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

    getDetails: (movieId) => { 
        return Movie.findById(movieId).select('id title description imageUrl duration genres category year director writer cast'); 
    }, 

    getAllIndex: () => {
        return Movie.find({}).select('id title description imageUrl genres category'); 
    }

}; 