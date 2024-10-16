const db = require('../db')
const { Actor, Movie, Reviews } = require('../models')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
    const actors = [
        {
            name: 'Acor Pickle',
            age: 31,
            alive: true
        },
        {
            name: 'Ashly Morris',
            age: 12,
            alive: false
        },
        {
            name: 'James Hangry',
            age: 57,
            alive: true
        },
        {
            name: 'Rabbit Easter',
            age: 101,
            alive: false
        }
    ]
    await Actor.insertMany(actors)
 console.log("Famous Actors!")
}

const run = async () => {
    await main()
    db.close()
}