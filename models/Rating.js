const mongoose = require('mongoose')

const ratingSchema = new mongoose.Schema({
    book:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Book'
    },
    ratingNumber:{
        type: Number
    },
    date:{
        type: Date
    },
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
})

module.exports = mongoose.model('Rating', ratingSchema)
