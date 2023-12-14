function uploadImage (req, res) {
      try {
            console.log(req.file || 'req.file')

            res.json({
                  message: "Image Uploaded"
            })
      } catch (error) {
            res.json({
                  message: error
            })
      }
};

module.exports = uploadImage;