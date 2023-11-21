const router = require('express').Router()
const { getAlltaps, seedtapController, deletetap } = require('../controllers/taps')

router.get('/alltaps', getAlltaps)
router.post('/seedtap', seedtapController)
router.post('/deletetap', deletetap)

module.exports = router;