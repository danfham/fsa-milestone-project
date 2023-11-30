const mongoose = require('mongoose')

const ratingSchema = mongoose.Schema({
    book:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Book'
    },
    ratingNumber:{
        type: Number
    },
    date:{
        type: Date
    }
})

module.exports = mongoose.model('Rating', ratingSchema)