const mongoose = require('mongoose')

const bookSchema = new mongoose.Schema({
    title: {
        type: String,
        require: true
    },
    author: {
        type: String,
        require: true
    },
    releaseDate: {
        type: Date,
        require: true
    },
    cover: {
        type: Image,
        require: true
    },
    ratings: [{
        type: Number
    }],
    averageRating: {
        type: Number
    }

})

gameSchema.methods.getRating = function(){
    
    average = 0

    for(i=0; i < ratings.length; i++){
        average += ratings[i]
    }

    return average
}

module.exports = mongoose.model('Book', bookSchema)