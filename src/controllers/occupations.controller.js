const occupationsController = require('express').Router(); 
const occupationsService = require('../services/occupations.service'); 

occupationsController
    .get('/add', (req, res) => {
        res.render('occupations/add'); 
    }) 
    .post('/add', async (req, res) => { 
        const occupationData = req.body; 

        try { 
            await occupationsService.add(occupationData); 
            res.redirect('/'); 
        } catch (e) { 
            res.render('occupations/add', { occupationData }); 
        }
    }); 

module.exports = occupationsController; 
