const router = require('express').Router()
const {databaseSeed} = require('../services/apifetch.service')
const Rating = require('../models/Rating')
require('../models/Review')
require('../models/Book')
require('../models/User')

router.post('/', async (req, res) => {
    let newRating = await Rating.create({
        date: new Date(), 
        ratingNumber: req.body.ratingNumber, 
        book: req.body.book,
        user: req.body.user
    })

    req.body.user.ratings.push(newRating)
    req.body.book.ratings.push(newRating)

    res.status(303).redirect(`/book/${req.body.book.isbn}`)
})