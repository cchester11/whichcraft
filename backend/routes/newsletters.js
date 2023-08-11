const router = require('express').Router();
const { addNewsLetter, addTestNewsLetter, getAllNewsLetters } = require('../controllers/newsletters');

router.post('/addnewsletter', addNewsLetter);
router.post('/addtestnewsletter', addTestNewsLetter);
router.get('/allnewsletters', getAllNewsLetters);

module.exports = router;