const fs = require('fs');
const path = require('path');

const loginAuth = (req, res) => {
      const filePath = path.join(__dirname, '../data/admin.json');

      try {
            const adminData = fs.readFileSync(filePath, 'utf-8')

            console.log(req.body)

            const response = JSON.parse(adminData);
            console.log(req.body);

            res.json({
                  message: "Response",
                  data: response
            })
      }
      catch (error) {
            res.status(500).json({
                  error: error.message
            })
      }
};

module.exports = loginAuth;