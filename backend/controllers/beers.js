const data = require('../data/data.json');
const fs = require('fs');
const path = require('path');

// get request all beers
function getAllBeers(req, res) {
      res.json(data.beer)
}

// post request single beer
function seedBeerController(req, res) {
      let beerPath = path.join(__dirname, '../data/data.json');
      let beerBody = req.body
      let beerProperties = []

      try {
            if (beerBody) {
                  Object.entries(beerBody).map(([property, value]) => {
                        beerProperties.push(property)
                        if(typeof value !== 'string') {
                              return 'A string is required as the value type for this input.'
                        }
                  })

                  console.log(beerProperties)

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

// delete request single beer

module.exports = { getAllBeers, seedBeerController };