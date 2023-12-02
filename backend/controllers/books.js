const router = require('express').Router()
const User = require('../models/User')
const Books = require('../models/Book')

// GET page of all 
router.get('/', async (req,res) =>{
    const itineraries = await Books.find()
    res.render('index', {Book})
})



module.exports = router