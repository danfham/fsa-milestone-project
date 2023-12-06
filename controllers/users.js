const router = require('express').Router()
const User = require('../models/User')
const bcrypt = require('bcrypt');
const UserSeedData = require('../models/UserSeedData');
require('../models/Review')
require('../models/Rating')
require('../models/Book')

// const { User } = db

router.post('/', async (req, res) => {
    const user = await User.create({
        userName: req.body.userName,
        password: await bcrypt.hash(req.body.password,10)
    })
    res.json(user)
})


router.get('/', async (req, res) => {
    const users = await User.findAll()
    res.json(users)
})

router.get('/login/request', async (req, res) => {
    input = req.body
    
    try{
        user = User.findOne({userName: input.userName}) 
    } 
    catch{
        res.status(404).send('User not found')
    }

    if(user.password === bcrypt.hash(input.password,10)){
        res.redirect('http://localhost:3000/book/0720610311')
    }
    else{
        res.status(404).send('Password incorrect')
    }
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