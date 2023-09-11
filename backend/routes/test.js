const router = require('express').Router();
const adminLogin = require('../controllers/test/admin');
const addNewsLetter = require('../controllers/test/addNewsLetter');
const deleteNewsLetter = require('../controllers/test/deleteNewsLetter');
const deleteBeer = require('../controllers/test/deleteBeer');

router.post('/admin/login', adminLogin);
router.post('/addnewsletter', addNewsLetter);
router.delete('/deletenewsletter', deleteNewsLetter);
router.delete('/deletebeer', deleteBeer);

module.exports = router;