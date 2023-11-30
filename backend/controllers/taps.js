const data = require('../data/data.json');
const fs = require('fs');
const path = require('path');

// get request all taps
function getAlltaps(req, res) {
      res.json(data.tap)
};

// get titles of every tap
function getAllTapTitles(req, res) {
      // declare an array that will store all titles
      let tapTitles = [];

      // read the json data
      Object.entries(data.tap).map(([property, value]) => {
            if(value.title) {
                  tapTitles.push(value.title)
            }
      })

      // return the array in the response parameter
      res.json({
            message: "All tap titles",
            data: tapTitles
      })
};

// post request single tap
function seedtapController(req, res) {
      let tapPath = path.join(__dirname, '../data/data.json');
      let tapBody = req.body
      let tapProperties = []

      try {
            if (tapBody) {
                  Object.entries(tapBody).map(([property, value]) => {
                        tapProperties.push(property)
                        if (typeof value !== 'string') {
                              return 'A string is required as the value type for this input.'
                        }
                  })

                  console.log(tapProperties)

                  data.tap.push(tapBody)

                  fs.writeFile(tapPath, JSON.stringify(data), () => {
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
};

// delete request single tap
function deletetap(req, res) {
      let tapTitle;
      let match = false;
      const filePath = path.join(__dirname, '../data/data.json');
      let jsonData = JSON.parse(fs.readFileSync(filePath, 'utf-8'));
      let taps = jsonData.tap;

      try {
            if (req.body) {
                  console.log("body: " + req.body);

                  Object.entries(taps).map(([property, value]) => {
                        if (value.title === req.body.title) {
                              console.log(value.title);
                              tapTitle = value.title;

                              // Set the element to null instead of deleting it
                              jsonData.tap[property] = null;

                              match = true;
                        } else {
                              console.log('no match: ' + req.body.title)
                        }
                  });

                  if (match) {
                        // Filter out the null elements and create a new array
                        const updatedtaps = jsonData.tap.filter((tap) => tap !== null);

                        jsonData.tap = updatedtaps;

                        fs.writeFile(filePath, JSON.stringify(jsonData), () => {
                              console.log('Updated data');
                        });

                        res.json({
                              header: "Success",
                              message: `Tap ${tapTitle} has been deleted.`
                        });
                  } else {
                        res.json({
                              header: "Error",
                              message: "No tap in the database with a matching title"
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
};

module.exports = { getAlltaps, getAllTapTitles, seedtapController, deletetap };