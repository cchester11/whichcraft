const router = require('express').Router();
const { createAdmin, loginAuth, checkAuthStatus, destroyAuth } = require('../controllers/admin');

router.post('/createadmin', createAdmin);
router.post('/login', loginAuth);
router.post('/authstatus', checkAuthStatus);
router.delete('/destroyauth', destroyAuth);

module.exports = router;