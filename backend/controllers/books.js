const router = require('express').Router()
const User = require('../models/user')
const Books = require('../models/book')

// GET page of all itineraries
router.get('/', async (req,res) =>{
    const itineraries = await Books.find()
    res.render('index', {Book})
})



module.exports = router