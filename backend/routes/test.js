const router = require('express').Router();
const adminLogin = require('../controllers/test/admin');
const addNewsLetter = require('../controllers/test/addNewsLetter');
const deleteNewsLetter = require('../controllers/test/deleteNewsLetter');
const deletetap = require('../controllers/test/deletetap');

router.post('/admin/login', adminLogin);
router.post('/addnewsletter', addNewsLetter);
router.delete('/deletenewsletter', deleteNewsLetter);
router.delete('/deletetap', deletetap);

module.exports = router;