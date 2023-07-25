const data = require('../data/data.json');
const fs = require('fs');
const path = require('path');

function seedBeerController (req, res) {
      let beerPath = path.join(__dirname, '../data/data.json');
      let beerBody = req.body

      data.beer.push(beerBody)

      let send = JSON.stringify(data)

      fs.writeFile(beerPath, send, () => {
            console.log(`${data} sent to json storage`)
      })

      res.json({ 
            message: "Successful request",
            data: req.body
      })
}

module.exports = seedBeerController;