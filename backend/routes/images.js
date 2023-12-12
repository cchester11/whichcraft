const router = require('express').Router();
const multer = require('multer');
const upload = multer({
      dest: '../../frontend/public/images'
});
const uploadImage = require('../controllers/images');

router.post('/uploadimage', upload.single('imageInput'), uploadImage);

module.exports = router;