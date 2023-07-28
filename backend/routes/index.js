const router = require('express').Router();
const newsLetterRoutes = require('./newsletters');
const seedBeer = require('./beers');

router.use('/newsletters', newsLetterRoutes);
router.use('/beer', seedBeer);

module.exports = router;