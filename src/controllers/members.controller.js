const membersController = require('express').Router(); 
const membersService = require('../services/members.service');
const occupationsService = require('../services/occupations.service'); 

// Routes 
membersController
    .get('/add', async (req, res) => { 
        const occupations = await occupationsService.getAll().lean(); 
        res.render('members/add', { occupations }); 
    }) 
    .post('/add', async (req, res) => { 
        const memberData = req.body; 

        try {
            await membersService.add(memberData); 
            res.redirect('/'); 
        } catch (e) {
            const occupations = await occupationsService.getAll().lean(); 
            res.render('members/add', { occupations, e }); 
            
            // console.log(e); 
        }
        
    }); 

module.exports = membersController; 