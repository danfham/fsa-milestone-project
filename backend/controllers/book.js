const router = require('express').Router()
const {databaseSeed} = require('../services/apifetch.service')
const Book = require('../models/Book')

/*
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
*/

router.get('/:isbn', async (req, res) => {
    const {isbn} = req.params
    const book = await Book.find(b => b.isbn === isbn).populate([{
        path: 'ratings',
        populate: {
        path: 'user',
        model: 'User'
        },
    },  {
        path: 'reviews',
        populate: {
        path: 'user',
        model: 'User'
        }
    }])
})




module.exports = router