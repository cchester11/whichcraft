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
      let match = false;
      const filePath = path.join(__dirname, '../data/data.json');
      let jsonData = JSON.parse(fs.readFileSync(filePath, 'utf-8'));
      let beers = jsonData.beer;

      try {
            if (req.body) {
                  console.log(req.body);

                  Object.entries(beers).map(([property, value]) => {
                        if (value.title === req.body.title) {
                              console.log(value.title);
                              beerTitle = value.title;

                              // Set the element to null instead of deleting it
                              jsonData.beer[property] = null;

                              match = true;
                        }
                  });

                  if (match) {
                        // Filter out the null elements and create a new array
                        const updatedBeers = jsonData.beer.filter((beer) => beer !== null);

                        jsonData.beer = updatedBeers;

                        fs.writeFile(filePath, JSON.stringify(jsonData), () => {
                              console.log('Updated data');
                        });

                        res.json({
                              message: `The body has been logged. Good request. Title ${beerTitle} has been deleted.`
                        });
                  } else {
                        res.json({
                              message: "No beer in the database with a matching title"
                        });
                  }
            } else {
                  res.json({
                        error: "No body provided in request"
                  });
            }
      } catch (error) {
            throw new Error(error);
      }
}

module.exports = { getAllBeers, seedBeerController, deleteBeer };