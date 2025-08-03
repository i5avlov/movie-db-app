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
    genres: [{
        type: Types.ObjectId, 
        ref: 'Genre' 
    }], 
    category: { 
        type: Types.ObjectId, 
        ref: 'Category' 
    }, 
    duration: {
        type: Number, 
        required: true 
    }, 
    year: {
        type: Date, 
        required: true 
    }, 
    director: {
        type: Types.ObjectId, 
        ref: 'Member'
    }, 
    writer: {
        type: Types.ObjectId, 
        ref: 'Member'
    }, 
    cast: [{
        type: Types.ObjectId, 
        ref: 'Member'
    }] 
}); 

const Movie = model('Movie', movieSchema); 

module.exports = Movie; 
