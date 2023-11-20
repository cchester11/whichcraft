const fs = require('fs');
const path = require('path');

// delete request single tap
// delete request single tap
function deletetap(req, res) {
      let tapTitle;
      let match = false;
      const filePath = path.join(__dirname, '../../data/test_data.json');
      let jsonData = JSON.parse(fs.readFileSync(filePath, 'utf-8'));
      let taps = jsonData.tap;

      try {
            if (req.body) {
                  console.log(req.body);

                  Object.entries(taps).map(([property, value]) => {
                        if (value.title === req.body.title) {
                              console.log(value.title);
                              tapTitle = value.title;

                              // Set the element to null instead of deleting it
                              jsonData.tap[property] = null;

                              match = true;
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
                              message: `The body has been logged. Good request. Title ${tapTitle} has been deleted.`
                        });
                  } else {
                        res.json({
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
}

module.exports = deletetap;