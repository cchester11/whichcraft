const router = require('express').Router();
const addNewsLetter = require('../controllers/newsletters');

router.post('/addnewsletter', addNewsLetter);

module.exports = router;