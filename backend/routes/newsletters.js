const router = require('express').Router();
const { addNewsLetter, getAllNewsLetters, getAllNewsletterTitles, deleteNewsLetter } = require('../controllers/newsletters');

router.post('/addnewsletter', addNewsLetter);
router.get('/allnewsletters', getAllNewsLetters);
router.get('/allnewslettertitles', getAllNewsletterTitles);
router.post('/deletenewsletter', deleteNewsLetter);

module.exports = router;