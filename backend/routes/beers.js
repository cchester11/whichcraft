const router = require('express').Router()
const { getAllBeers, seedBeerController, deleteBeer } = require('../controllers/beers')

router.get('/allbeers', getAllBeers)
router.post('/seedbeer', seedBeerController)
router.delete('/deletebeer', deleteBeer)

module.exports = router;