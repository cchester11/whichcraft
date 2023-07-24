const router = require('express').Router()
const seedBeerController = require('../controllers/seedBeer')

router.post('/seedbeer', seedBeerController)

module.exports = router;