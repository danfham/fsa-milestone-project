const router = require('express').Router()
const {databaseSeed} = require('../services/apifetch.service')

router.get('/data/seed', async (req, res) => {
    try{
        await databaseSeed()
        res.json({message :'complete'})
    } 
    catch (e) {
        console.log("Error", e.stack);
        console.log("Error", e.name);
        console.log("Error", e.message);
    }
})

module.exports = router