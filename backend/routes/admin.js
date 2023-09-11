const router = require('express').Router();
const { createAdmin, loginAuth } = require('../controllers/admin');

router.post('/createadmin', createAdmin);
router.post('/login', loginAuth);

module.exports = router;