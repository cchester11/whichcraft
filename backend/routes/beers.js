const router = require('express').Router()
const { getAllBeers, seedBeerController } = require('../controllers/beers')

router.get('/allbeers', getAllBeers)
router.post('/seedbeer', seedBeerController)

module.exports = router;