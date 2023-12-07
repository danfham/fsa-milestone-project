const router = require('express').Router()
const {databaseSeed} = require('../services/apifetch.service')
const Book = require('../models/Book')
require('../models/Review')
require('../models/Rating')
require('../models/User')

// GET page of all itineraries
router.get('/', async (req,res) =>{
    res.render('Home')
})

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

router.get('/search', async (req, res) => {
    const search = req.params
    console.log(search)
    try{
        const book = await search.findOne({title: search})
        res.status(303).redirect(`/book/${book.isbn}`)
    }
    catch{
        res.status(404).send('Could not find book')
    }
})

router.get('/:isbn', async (req, res) => {
    const {isbn} = req.params
    const book = await Book.findOne({isbn: isbn}).populate([{
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
    res.render('bookShowPage', {book})
})




module.exports = router