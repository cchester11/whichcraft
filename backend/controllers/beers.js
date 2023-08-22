const data = require('../data/data.json');
const fs = require('fs');
const path = require('path');

function getAllBeers(req, res) {
      res.json(data.beer)
}

function seedBeerController(req, res) {
      let beerPath = path.join(__dirname, '../data/data.json');
      let beerBody = req.body

      try {
            if (beerBody) {
                  data.beer.push(beerBody)

                  fs.writeFile(beerPath, JSON.stringify(data), () => {
                        console.log(`${data} sent to json storage`)
                  })

                  res.json({
                        message: "Successful request",
                        data: req.body
                  })
            } else {
                  res.json({
                        error: "No body included in your request"
                  })
            }
      } catch (error) {
            throw new Error(error)
      }
}

module.exports = { getAllBeers, seedBeerController };