const { Schema } = require('mongoose')

const Actor = new Schema(
    {
        name: { type: String },
        age:  { type: Number },
        alive: {type: Boolean }

    },
    {timestamps: true}
)

module.expprts = Actor