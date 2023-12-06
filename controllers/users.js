const router = require('express').Router()
const User = require('../models/User')
const bcrypt = require('bcrypt')

// const { User } = db

router.post('/', async (req, res) => {
    let {password, ...rest} = req.body;
    const user = await User.create({
        ...rest,
        role:'reviewer',
        passwordDigest: await bcrypt.hash(password,10)
    })
    res.json(user)
})


router.get('/', async (req, res) => {
    const users = await User.findAll()
    res.json(users)
})

router.get('/:userName', async (req, res) => {
    const {userName} = req.params
    const user = await User.find({userName: userName}).populate([{
        path: 'ratings',
        populate: {
        path: 'book',
        model: 'Book'
        },
    },  {
        path: 'reviews',
        populate: {
        path: 'book',
        model: 'Book'
        }
    }])
})

module.exports = router