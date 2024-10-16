const { Schema } = require('mongoose')

const Reviews = new Schema(
    {
        score: { type: Number },
        comment: { type: String }
    },
    {timestamps: true}
)

module.exports = Reviews