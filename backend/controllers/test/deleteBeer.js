const fs = require('fs');
const path = require('path');

// delete request single beer
function deleteBeer(req, res) {
      let beerTitle;
      let match = false;
      const filePath = path.join(__dirname, '../../data/test_data.json')
      let jsonData = JSON.parse(fs.readFileSync(filePath, 'utf-8'))
      let beers = jsonData.beer;

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
                        const updatedBeers = {
                              beers: Object.fromEntries(
                                    Object.entries(beers).filter(([_, value]) => value !== null)
                              )
                        }

                        beers = updatedBeers;

                        fs.writeFile(filePath, JSON.stringify(jsonData), () => {
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

module.exports = deleteBeer;