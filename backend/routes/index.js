const router = require('express').Router();
const adminRoutes = require('./admin');
const imageRoutes = require('./images');
const newsLetterRoutes = require('./newsletters');
const tapRoutes = require('./taps');
const testRoutes = require('./test');

router.use('/admin', adminRoutes);
router.use('/images', imageRoutes);
router.use('/newsletters', newsLetterRoutes);
router.use('/taps', tapRoutes);
router.use('/test', testRoutes);

module.exports = router;