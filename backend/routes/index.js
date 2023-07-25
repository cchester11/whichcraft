const router = require('express').Router()
const seedBeer = require('./beers')

router.use('/beer', seedBeer)

module.exports = router;