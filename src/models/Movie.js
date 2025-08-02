const { Schema, model, Types } = require('mongoose'); 

const movieSchema = new Schema({ 
    title: {
        type: String, 
        required: true 
    }, 
    description: {
        type: String, 
        required: true 
    }, 
    imageUrl: {
        type: String, 
        required: true 
    }, 
    genre: {
        type: String, 
        required: true 
    }, 
    category: { 
        type: String, 
        required: true 
    }, 
    year: {
        type: Date, 
        required: true 
    }, 
    duration: {
        type: Number, 
        required: true 
    }, 
    director: {
        type: String, 
        required: true 
    }, 
    writer: {
        type: String, 
        required: true 
    }, 
    cast: [{
        type: Types.ObjectId, 
        ref: 'Cast' 
    }] 
}); 

const Movie = model('Movie', movieSchema); 

module.exports = { Movie, Actor }; 
