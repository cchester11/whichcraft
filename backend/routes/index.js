const router = require('express').Router()
const seedBeer = require('./seedBeer')

router.use('/beer', seedBeer)

module.exports = router;