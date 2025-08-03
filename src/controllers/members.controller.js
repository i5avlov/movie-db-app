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

membersController
    .get('/', async (req, res) => { 
        const membersData = await membersService.getAll()
            .populate('occupation')
            .lean(); 

        res.render('members/index', { membersData }); 
    }); 

membersController
    .get('/:memberId/details', async (req, res) => { 
        const memberId = req.params.memberId; 
        const memberData = await membersService.getById(memberId)
            .populate('occupation')
            .lean(); 

        res.render('members/details', memberData); 
    }); 

module.exports = membersController; 