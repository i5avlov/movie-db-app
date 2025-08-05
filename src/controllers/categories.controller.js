const categoriesController = require('express').Router(); 
const categoriesService = require('../services/categories.service'); 

categoriesController
    .get('/add', (req, res) => {
        res.render('categories/add'); 
    }) 
    .post('/add', async (req, res) => { 
        const categoryData = req.body; 

        try { 
            await categoriesService.add(categoryData); 
            res.redirect('/categories/add'); 
        } catch (e) { 
            res.render('categories/add', { categoryData, error: e }); 
        }
    }); 

module.exports = categoriesController; 
