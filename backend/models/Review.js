const mongoose = require('mongoose')

const reviewSchema = mongoose.Schema({
    game:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Game'
    },
    review:{
        type: String
    },
    date:{
        type: Date
    }
})

module.exports = mongoose.model('Review', reviewSchema)