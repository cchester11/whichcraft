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
      const newsLetterPath = path.join(__dirname, '../data/data.json')

      try {
            let title = req.body.title;
            let matchFound = false;
            let newsletter_title;

            if (req.body) {
                  let newsLetters = data.newsLetters;
                  // locate newsletter by the title and remove it from the newsletter array
                  for (const [property, value] of Object.entries(newsLetters)) {
                        if (value.heading && value.heading.text === title) {
                              // check for errors 
                              if (value.heading.text === title) {
                                    newsletter_title = value.heading.text

                                    // remove letter
                                    delete data.newsLetters[property]

                                    // switch matchFound to true
                                    matchFound = true;
                              }
                              break;
                        }
                  }

                  if (matchFound) {
                        console.log({...data})
                        const updatedData = {
                              ...data,
                              newsLetters: Object.fromEntries(
                                    Object.entries(data.newsLetters).filter(([_, value]) => value !== null)
                              )
                        };

                        // rewrite the json file
                        fs.writeFile(newsLetterPath, JSON.stringify(updatedData), 'utf8', () => {
                              console.log('Newsletter with title ' + newsletter_title + ' deleted and file overwritten')
                        })

                        //send back a message if all good
                        res.json({
                              message: "Successful delete request"
                        })
                  } else {
                        res.json({
                              message: "Could not find a matching title."
                        })
                  }
            } else {
                  res.json({
                        message: `There was no data found in the request sent -- empty body`
                  })
            }
      } catch (error) {
            res.status(400).json({
                  error: error.message
            })
      }
}

module.exports = { getAllNewsLetters, addNewsLetter, addTestNewsLetter, deleteNewsLetter };