const router = require('express').Router();
const adminRoutes = require('./admin');
const newsLetterRoutes = require('./newsletters');
const beerRoutes = require('./beers');
const testRoutes = require('./test');

router.use('/admin', adminRoutes);
router.use('/newsletters', newsLetterRoutes);
router.use('/beers', beerRoutes);
router.use('/test', testRoutes);

module.exports = router;