const express = require('express')
require('dotenv').config()
const mongoose = require('mongoose')
const userRoutes = require('./controllers/users')
const bookRoutes = require('./controllers/book')

const app = express()


// MIDDLEWARE
app.use(express.urlencoded({extended: true}))

// MongoDB Connection
console.log(process.env.MONGO_URI)
mongoose.connect(process.env.MONGO_URI, {useNewUrlParser: true})
    .then(() => console.log('DB connected'))
    .catch(err => console.error(err))

/*
app.use('/users', require('./controllers/users'))
app.use('/authentication', require('./controllers/authentication'))   
*/

app.use('/user', userRoutes)
app.use('/book', bookRoutes)

app.get('/', (req, res) => {
  res.send('Hello World!')
})

port=process.env.PORT
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})