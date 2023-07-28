const data = require('../data/data.json');
const fs = require('fs');
const path = require('path');

function addNewsLetter (req, res) {
      const newsLetterPath = path.join(__dirname, '../data/data.json')

      let newsLetter = req.body

      data.newsLetters.push(newsLetter)

      fs.writeFile(newsLetterPath, JSON.stringify(data), () => {
            console.log(`${newsletter} sent to stroage.`)
      })

      res.json({
            message: "Successful Request",
            newsletter: newsLetter
      })
};

module.exports = addNewsLetter;