const router = require('express').Router()
const User = require('../models/User')
const bcrypt = require('bcrypt');
const UserSeedData = require('../models/UserSeedData');
require('../models/Review')
require('../models/Rating')
require('../models/Book')

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

// GET seed data
router.get('/login', async (req, res) => {
    res.render('users/LoginForm')
})

// GET seed data
router.get('/signup', async (req, res) => {
    res.render('users/SignUpForm')
})

// GET seed data
router.get('/seed', async (req, res) => {
    await Promise.all(User.deleteMany())
    const user = await User.insertMany(UserSeedData)
    res.send(user)
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