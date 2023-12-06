const express = require('express')
require('dotenv').config()
const mongoose = require('mongoose')
const userRoutes = require('./controllers/users')
const bookRoutes = require('./controllers/book')

const app = express()


// MIDDLEWARE
// app.use(methodOverride('_method'))
app.use(express.urlencoded({extended: true}))
app.use(express.static('public'))
app.set('views', __dirname + '/views')
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())

// MongoDB Connection
mongoose.connect(process.env.MONGO_URI, {useNewUrlParser: true})
    .then(() => console.log('DB connected'))
    .catch(err => console.error(err))


app.use('/user', userRoutes)
app.use('/book', bookRoutes)

app.get('/', (req, res) => {
  res.send('Hello World!')
})

port=process.env.PORT
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})