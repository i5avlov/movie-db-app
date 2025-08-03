const genresController = require('express').Router(); 
const genresService = require('../services/genres.service'); 

genresController
    .get('/add', (req, res) => {
        res.render('genres/add'); 
    }) 
    .post('/add', async (req, res) => { 
        const genreData = req.body; 

        try { 
            await genresService.add(genreData); 
            res.redirect('/'); 
        } catch (e) { 
            res.render('genres/add', { genreData, error: e }); 
        }
    }); 

module.exports = genresController; 
