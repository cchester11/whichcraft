const path = require('path');
const router = require('express').Router();
const multer = require('multer');

const pathToUploadImage = path.join(__dirname, 'frontend/public/images')

const upload = multer({
      dest: pathToUploadImage
});

const uploadImage = require('../controllers/images');

router.post('/uploadimage', upload.single('imageInput'), uploadImage);

module.exports = router;