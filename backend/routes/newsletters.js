const router = require('express').Router();
const { addNewsLetter, getAllNewsLetters } = require('../controllers/newsletters');

router.post('/addnewsletter', addNewsLetter);
router.get('/allnewsletters', getAllNewsLetters);

module.exports = router;