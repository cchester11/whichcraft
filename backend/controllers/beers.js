const data = require('../data/data.json');
const fs = require('fs');
const path = require('path');

function getAllBeers (req, res) {
      res.json(data.beer)
}

function seedBeerController (req, res) {
      let beerPath = path.join(__dirname, '../data/data.json');
      let beerBody = req.body

      data.beer.push(beerBody)

      fs.writeFile(beerPath, JSON.stringify(data), () => {
            console.log(`${data} sent to json storage`)
      })

      res.json({ 
            message: "Successful request",
            data: req.body
      })
}

module.exports = { getAllBeers, seedBeerController };