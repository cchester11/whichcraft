const router = require('express').Router();
const { addNewsLetter, getAllNewsLetters, deleteNewsLetter } = require('../controllers/newsletters');

router.post('/addnewsletter', addNewsLetter);
router.get('/allnewsletters', getAllNewsLetters);
router.delete('/deletenewsletter', deleteNewsLetter);

module.exports = router;