const data = require('../data/data.json');
const fs = require('fs');
const path = require('path');

function getAllBeers (req, res) {
      res.json(data.beer)
}

function seedBeerController (req, res) {
      let beerPath = path.join(__dirname, '../data/data.json');
      let beerBody = req.body

      // check if body properties are single strings or arrays of strings
      // if each property is an array, check that each array length is equal to the other
      // in a for loop, push the current index of each array into an object and push that object into the beer array of the json data file

      data.beer.push(beerBody)

      // let send = JSON.stringify(data)

      fs.writeFile(beerPath, JSON.stringify(data), () => {
            console.log(`${data} sent to json storage`)
      })

      res.json({ 
            message: "Successful request",
            data: req.body
      })
}

module.exports = { getAllBeers, seedBeerController };