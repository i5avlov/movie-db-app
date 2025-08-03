const moviesController = require('express').Router(); 
const moviesService = require('../services/movies.service'); 
const categoriesService = require('../services/categories.service'); 
const genresService = require('../services/genres.service'); 

moviesController
    .get('/add', async (req, res) => { 
        const categories = await categoriesService.getAll().lean(); 
        const genres = await genresService.getAll().lean(); 

        res.render('movies/add', { categories, genres }); 
    }) 
    .post('/add', async (req, res) => { 
        const movieData = req.body;  

        try { 
            await moviesService.add(movieData); 
            res.redirect('/'); 
        } catch (e) {
            const categories = await categoriesService.getAll().lean(); 
            const genres = await genresService.getAll().lean(); 

            res.render('movies/add', { categories, genres, errors: e }); 
        }
        
    }); 

module.exports = moviesController; 
