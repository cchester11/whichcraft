const router = require('express').Router();
const newsLetterRoutes = require('./newsletters');
const beerRoutes = require('./beers');
const testRoutes = require('./test');

router.use('/newsletters', newsLetterRoutes);
router.use('/beers', beerRoutes);
router.use('/test', testRoutes);

module.exports = router;