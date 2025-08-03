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
            const movie = await moviesService.add(movieData); 
            res.redirect(`/movies/${movie.id}/details`); 
        } catch (e) {
            const categories = await categoriesService.getAll().lean(); 
            const genres = await genresService.getAll().lean(); 

            res.render('movies/add', { categories, genres, errors: e }); 
        }
        
    }); 

moviesController
    .get('/:movieId/update', async (req, res) => { 
        const movieId = req.params.movieId; 
        const movieData = await moviesService.getDetails(movieId).lean(); 
        const categories = await categoriesService.getAll().lean(); 
        const genres = await genresService.getAll().lean(); 

        // console.log(movieData); 

        res.render('movies/update', { movieData, categories, genres }); 
    }) 
    .post('/:movieId/update', async (req, res) => { 
        const movieId = req.params.movieId; 
        const movieData = req.body;  

        try { 
            const movie = await moviesService.update(movieId, movieData); 
            res.redirect(`/movies/${movie.id}/details`); 
        } catch (e) {
            const categories = await categoriesService.getAll().lean(); 
            const genres = await genresService.getAll().lean(); 

            res.render('movies/update', { movieData, categories, genres, errors: e }); 
        }
        
    }); 

moviesController
    .get('/:movieId/details', async (req, res) => { 
        const movieId = req.params.movieId; 
        const movieData = await moviesService.getDetails(movieId).populate('genres').lean(); 

        res.render('movies/details', movieData); 
    }); 

moviesController
    .get('/', async (req, res) => { 
        const moviesData = await moviesService.getAllIndex().populate('genres category').lean(); 

        res.render('movies/index', { moviesData }); 
    }); 

module.exports = moviesController; 
