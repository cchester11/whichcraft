const data = require('../data/data.json');
const test_data = require('../data/test_data.json');
const fs = require('fs');
const path = require('path');
const { checkHeading, checkAllProperties } = require('../helpers/checkNewsLetter');

// get request for all newsletters 
function getAllNewsLetters(req, res) {
      const newsLetterPath = path.join(__dirname, "../data/data.json")

      fs.readFile(newsLetterPath, 'utf8', (err, data) => {
            if (err) {
                  res.json({
                        message: "Unsuccessful request",
                        error: err
                  })
            }

            res.json({
                  data: JSON.parse(data)
            })
      })
};

// post request to add new newsletter
function addNewsLetter(req, res) {
      const newsLetterPath = path.join(__dirname, '../data/data.json')

      let newsLetter = req.body

      try {
            checkHeading(newsLetter)
            checkAllProperties(newsLetter)

            data.newsLetters.push(newsLetter)

            fs.writeFile(newsLetterPath, JSON.stringify(data), () => {
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
// post request for test newsletters to test storage file
function addTestNewsLetter(req, res) {
      const newsLetterPath = path.join(__dirname, '../data/test_data.json')

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

// delete request to delete a newsletter
function deleteNewsLetter(req, res) {
      try {
            console.log(req.body.title)
            let title = req.body.title

            if(req.body) {
                  // locate newsletter by the title and remove it from the newsletter array

                  // rewrite the file

                  // check for errors 
                  // send back error message if something went wrong

                  //send back a message if all good
                  res.json({
                        message: "delete request successful"
                  })
            }

            res.json({
                  message: `Could not find a newsletter with that title`
            })
      } catch (error) {
            res.status(400).json({
                  error: error.message
            })
      }
}

module.exports = { getAllNewsLetters, addNewsLetter, addTestNewsLetter, deleteNewsLetter };