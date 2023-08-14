const router = require('express').Router();
const { addNewsLetter, addTestNewsLetter, getAllNewsLetters, deleteNewsLetter } = require('../controllers/newsletters');

router.post('/addnewsletter', addNewsLetter);
router.post('/addtestnewsletter', addTestNewsLetter);
router.get('/allnewsletters', getAllNewsLetters);
router.delete('/deletenewsletter', deleteNewsLetter);

module.exports = router;