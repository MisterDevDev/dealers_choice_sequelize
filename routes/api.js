const express = require('express');
const router = express.Router();
const db = require('../db');
const apiList = require('../views/list');
const apiDetails = require('../views/details')
const { seed, models: {Application, Circuit} } = require('../db');
const { application } = require('express');

router.get('/', async (req, res, next) =>{
    try{
        res.send(
            apiList()
        )
    } catch(err) {
        next(err)
    }
})

router.get('/:year', async (req, res, next) => {
    try{
        const year = req.params.year
        const appData = await Application.findAll(
            {
                include: {
                    model: Circuit
            }
            })

        res.send(appData)
    } catch(err) {
        next(err)
    }
})

module.exports = router;