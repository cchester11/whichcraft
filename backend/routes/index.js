const router = require('express').Router();
const newsLetterRoutes = require('./newsletters');
const beerRoutes = require('./beers');

router.use('/newsletters', newsLetterRoutes);
router.use('/beers', beerRoutes);

module.exports = router;