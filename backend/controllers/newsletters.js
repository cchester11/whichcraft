const data = require('../data/data.json');
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
      console.log(newsLetter)
      // run conditional here to check the body
      // if passes then run the below push to the data.json file and the subsequent rewrite of the file

      data.newsLetters.push(newsLetter)

      fs.writeFile(newsLetterPath, JSON.stringify(data), () => {
            console.log(`${newsletter} sent to stroage.`)
      })

      res.json({
            message: "Successful Request",
            newsletter: newsLetter
      })
};

module.exports = { getAllNewsLetters ,addNewsLetter };