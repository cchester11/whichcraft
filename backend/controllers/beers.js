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
                        if (typeof value !== 'string') {
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
function deleteBeer(req, res) {
      let beerTitle;
      let beers = data.beer;
      let match = false;
      const filePath = path.join(__dirname, '../data/data.json')

      try {
            if (req.body) {
                  console.log(req.body)

                  Object.entries(beers).map(([property, value]) => {
                        if (value.title === req.body.title) {
                              console.log(value.title)
                              beerTitle = value.title

                              delete beers[property]

                              match = true;
                        }
                  })

                  if (match) {
                        fs.writeFile(filePath, JSON.stringify(data), () => {
                              console.log('Updated data')
                        })
                        res.json({
                              message: `The body has been logged. Good request. Title ${beerTitle} has been deleted.`
                        })
                  } else {
                        res.json({
                              message: "No beer in the database with a matching title"
                        })
                  }
            } else {
                  res.json({
                        error: "No body provided in request"
                  })
            }
      } catch (error) {
            throw new Error(error)
      }
}

module.exports = { getAllBeers, seedBeerController, deleteBeer };