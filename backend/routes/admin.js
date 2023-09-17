const router = require('express').Router();
const { createAdmin, loginAuth, checkAuthStatus } = require('../controllers/admin');

router.post('/createadmin', createAdmin);
router.post('/login', loginAuth);
router.post('/authstatus', checkAuthStatus);

module.exports = router;