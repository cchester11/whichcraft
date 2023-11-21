const router = require('express').Router()
const { getAlltaps, getAllTapTitles, seedtapController, deletetap } = require('../controllers/taps')

router.get('/alltaps', getAlltaps)
router.get('/alltaptitles', getAllTapTitles)
router.post('/seedtap', seedtapController)
router.post('/deletetap', deletetap)

module.exports = router;