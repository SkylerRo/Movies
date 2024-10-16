const db = require('../db')
const { Actor, Movie, Reviews } = require('../models')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))