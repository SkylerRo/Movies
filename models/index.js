const mongoose = require('mongoose')
const ActorSchema = require('./actors')
const ReviewsSchema = require('./review')
const MovieSchema = require('./movies')

const Actor = mongoose.model('Actor', ActorSchema)
const Reviews = mongoose.model('Reviews', ReviewsSchema)
const Movie = mongoose.model('Movie', MovieSchema)

module.exports = {
    Actor,
    Movie,
    Reviews
}