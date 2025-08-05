const Movie = require('../models/Movie'); 

module.exports = { 
    add: (movieData) => { 
        const { title, description, imageUrl, genreIds, categoryId, duration, year } = movieData; 
        
        return Movie.create({ 
            title, 
            description, 
            imageUrl, 
            genres: genreIds, 
            category: categoryId, 
            duration, 
            year 
        }); 
    }, 

    update: (movieId, updateData) => { 
        const { title, description, imageUrl, genreIds, categoryId, duration, year } = updateData; 

        return Movie.findByIdAndUpdate(movieId, {
            title, 
            description, 
            imageUrl, 
            genres: genreIds, 
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