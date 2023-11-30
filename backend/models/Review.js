const mongoose = require('mongoose')

const reviewSchema = mongoose.Schema({
    book:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Book'
    },
    review:{
        type: String
    },
    date:{
        type: Date
    }
})

module.exports = mongoose.model('Review', reviewSchema)