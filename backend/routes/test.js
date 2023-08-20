const router = require('express').Router()
const addNewsLetter = require('../controllers/test/addNewsLetter')

router.post('/addnewsletter', addNewsLetter);

module.exports = router;