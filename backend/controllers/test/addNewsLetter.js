const test_data = require('../../data/test_data.json');
const fs = require('fs');
const path = require('path')
const { checkHeading, checkAllProperties } = require('../../helpers/checkNewsLetter');

// post request for test newsletters to test storage file
function addTestNewsLetter(req, res) {
      try {
            const newsLetterPath = path.join(__dirname, '../../data/test_data.json')
            let newsLetter = req.body
            let newsLetters = test_data.newsLetters;
            checkHeading(newsLetter)
            checkAllProperties(newsLetter)

            newsLetters.push(newsLetter)

            fs.writeFile(newsLetterPath, JSON.stringify(test_data), () => {
                  console.log(`Newsletter successfully sent to stroage.`)
            })

            res.json({
                  message: "Successful Post",
            })
      } catch (error) {
            res.status(400).json({
                  error: error.message
            })
      }
};

module.exports = addTestNewsLetter;