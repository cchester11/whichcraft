const data = require('../data/data.json');
const test_data = require('../data/test_data.json');
const fs = require('fs');
const path = require('path');

// need some error checking in here

function getAllNewsLetters (req, res) {
      const newsLetterPath = path.join(__dirname, "../data/data.json")

      fs.readFile(newsLetterPath, 'utf8', (err, data) => {
            if(err) {
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

function addNewsLetter (req, res) {
      const newsLetterPath = path.join(__dirname, '../data/data.json')

      let newsLetter = req.body
      // run conditional here to check the body
      // if passes then run the below push to the data.json file and the subsequent rewrite of the file

      data.newsLetters.push(newsLetter)

      fs.writeFile(newsLetterPath, JSON.stringify(data), () => {
            console.log(`Newsletter successfully sent to stroage.`)
      })

      res.json({
            message: "Successful Request",
            newsletter: newsLetter
      })
};

function addTestNewsLetter (req, res) {
      const newsLetterPath = path.join(__dirname, '../data/test_data.json')

      let newsLetter = req.body
      
      // error handling here
      // 1. need to check that the heading property has an element value of heading
      console.log(newsLetter.heading)
      if(!newsLetter.heading) {
            res.json({
                  message: "Please provide a heading for your newsletter entry"
            })
      }

      test_data.newsletters.push(newsLetter)

      fs.writeFile(newsLetterPath, JSON.stringify(test_data), () => {
            console.log('Test letter sent to test data storage file')
      })

      res.json({
            message: "Successful post"
      })
}

module.exports = { getAllNewsLetters ,addNewsLetter, addTestNewsLetter };