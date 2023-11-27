const mongoose = require('mongoose')

const ratingSchema = mongoose.Schema({
    game:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Game'
    },
    ratingNumber:{
        type: Number
    },
    date:{
        type: Date
    }
})

module.exports = mongoose.model('Rating', ratingSchema)

