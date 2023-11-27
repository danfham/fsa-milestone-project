const mongoose = require('mongoose')

const gameSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    releaseDate: {
        type: Date,
        require: true
    },
    poster: {
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

module.exports = mongoose.model('Game', gameSchema)