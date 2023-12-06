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
        type: String,
        require: true
    },
    ratings: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Rating'
    }],
    reviews: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Review'
    }],
    averageRating: {
        type: Number
    },
    isbn: {
        type: String
    },
    pages: {
        type: Number
    },
    cover: {
        type: String,
        default: 'https://islandpress.org/sites/default/files/default_book_cover_2015.jpg'
    }

})

bookSchema.methods.getRating = function(){
    
    average = 0

    for(i=0; i < this.ratings.length; i++){
        average += this.ratings[i]
    }

    average /= this.ratings.legnth

    return average
}

module.exports = mongoose.model('Book', bookSchema)