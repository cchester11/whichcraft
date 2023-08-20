const test_data = require('../../data/test_data.json');
const fs = require('fs');
const path = require('path')
const { checkHeading, checkAllProperties } = require('../../helpers/checkNewsLetter');

// post request for test newsletters to test storage file
function addTestNewsLetter(req, res) {
      const newsLetterPath = path.join(__dirname, '../../data/test_data.json')

      let newsLetter = req.body

      try {
            checkHeading(newsLetter)
            checkAllProperties(newsLetter)

            test_data.newsletters.push(newsLetter)

            fs.writeFileSync(newsLetterPath, JSON.stringify(test_data), () => {
                  console.log('Test letter sent to test data storage file')
            })

            res.json({
                  message: "Successful post"
            })
      } catch (error) {
            res.status(400).json({
                  error: error.message
            })
      }
}

module.exports = addTestNewsLetter;