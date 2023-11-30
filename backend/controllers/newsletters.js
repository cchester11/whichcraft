const data = require('../data/data.json');
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

// get all newsletter titles
function getAllNewsletterTitles(req, res) {
      let letterTitles = [];
      try {
            Object.entries(data.newsLetters).map(([property, value]) => {
                  if(value.heading) {
                        letterTitles.push(value.heading.text)
                  }
            });
      
            res.json({
                  message: "All Newsletter Titles",
                  data: letterTitles
            })
      } catch (error) {
            res.status(400).json({
                  error: error.message
            });
      };
};

// post request to add new newsletter
function addNewsLetter(req, res) {
      try {
            const newsLetterPath = path.join(__dirname, '../data/data.json')
            let newsLetter = req.body
            let newsLetters = data.newsLetters;
            checkHeading(newsLetter)
            checkAllProperties(newsLetter)

            newsLetters.push(newsLetter)

            fs.writeFile(newsLetterPath, JSON.stringify(data), () => {
                  console.log(`Newsletter successfully sent to storage.`)
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
                                    data.newsLetters[property] = null;

                                    // switch matchFound to true
                                    matchFound = true;
                              }
                              break;
                        }
                  }

                  if (matchFound) {
                        const updatedNewsLetters = data.newsLetters.filter((newsletter) => {
                              return newsletter !== null; // Add the return statement here
                        });

                        data.newsLetters = updatedNewsLetters;

                        // rewrite the json file
                        fs.writeFile(newsLetterPath, JSON.stringify(data), 'utf8', () => {
                              console.log('Newsletter with title ' + newsletter_title + ' deleted and file overwritten')
                        })

                        //send back a message if all good
                        res.json({
                              header: "Success",
                              message: `${newsletter_title} has been deleted`
                        })
                  } else {
                        res.json({
                              header: "Error",
                              message: "Could not find a matching title."
                        })
                  }
            } else {
                  res.json({
                        header: "Error",
                        message: `There was no data found in the request sent -- empty body`
                  })
            }
      } catch (error) {
            res.status(400).json({
                  error: error.message
            })
      }
}

module.exports = { getAllNewsLetters, getAllNewsletterTitles, addNewsLetter, deleteNewsLetter };