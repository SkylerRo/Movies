const db = require('../db')
const { Actor, Movie, Reviews } = require('../models')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
    const review = [
        {
            score: 1-5,
            comment: "loren ipsum"
        },
        {
            score: 5-5,
            comment: "loren ipsum"
        },
        {
            score: 3-10,
            comment: "loren ipsum"
        },
        {
            score: 1-5,
            comment: "loren ipsum"
        }
    ]
    await Reviews.insertMany(review)
 console.log("Honest Reviews")
}

const run = async () => {
    await main()
    db.close()
}

run()