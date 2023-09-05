const router = require('express').Router();
const loginAuth = require('../controllers/admin');

router.post('/login', loginAuth);

module.exports = router;