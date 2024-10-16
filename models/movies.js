const { Schema } = require('mongoose')

const Movie = new Schema(
{
    title: {type: String,},
    runtime: {type: String},
    rating: {type: Number},
    yearReleased: {type: Number},
    description: {type: String}

},
{timestamps: true}
)

module.exports = Movie