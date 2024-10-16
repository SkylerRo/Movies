const db = require('../db')
const { Actor, Movie, Reviews } = require('../models')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
    const movies = [
        {
            title: "Movie1",
            runtime: "4 hours",
            rating: "3 out of 5 stars",
            description: "loren ipsom"
        },
        {
            title: "Movie2",
            runtime: "2 1/2 hours",
            rating: "3 out of 5 stars",
            description: "loren ipsom"
        },
        {
            title: "Movie3",
            runtime: "2 hours",
            rating: "4 out of 5 stars",
            description: "loren ipsom"
        },
        {
            title: "Movie4",
            runtime: "6 hours",
            rating: "5 out of 5 stars",
            description: "loren ipsom"
        }
    ]
    await Movie.insertMany(movies)
 console.log("Popular Movies!")
}

const run = async () => {
    await main()
    db.close()
}

run()