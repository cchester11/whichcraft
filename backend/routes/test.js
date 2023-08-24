const router = require('express').Router();
const addNewsLetter = require('../controllers/test/addNewsLetter');
const deleteNewsLetter = require('../controllers/test/deleteNewsLetter');

router.post('/addnewsletter', addNewsLetter);
router.delete('/deletenewsletter', deleteNewsLetter);

module.exports = router;