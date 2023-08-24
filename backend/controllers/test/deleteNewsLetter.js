const test_data = require('../../data/test_data.json');
const fs = require('fs');
const path = require('path')

// delete request to delete a newsletter
function deleteNewsLetter(req, res) {
      const newsLetterPath = path.join(__dirname, '../../data/test_data.json')

      try {
            let title = req.body.title;
            let matchFound = false;
            let newsletter_title;

            if (req.body) {
                  let newsLetters = test_data.newsLetters;
                  // locate newsletter by the title and remove it from the newsletter array
                  for (const [property, value] of Object.entries(newsLetters)) {
                        if (value.heading && value.heading.text === title) {
                              // check for errors 
                              if (value.heading.text === title) {
                                    newsletter_title = value.heading.text

                                    // remove letter
                                    delete test_data.newsLetters[property]

                                    // switch matchFound to true
                                    matchFound = true;
                              }
                              break;
                        }
                  }

                  if (matchFound) {
                        const updatedData = {
                              ...test_data,
                              newsLetters: Object.fromEntries(
                                    Object.entries(test_data.newsLetters).filter(([_, value]) => value !== null)
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

module.exports = deleteNewsLetter;