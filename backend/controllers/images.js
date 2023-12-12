function uploadImage (req, res) {
      try {
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