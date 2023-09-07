const fs = require('fs');
const path = require('path');

const loginAuth = (req, res) => {
      const filePath = path.join(__dirname, '../data/admin.json');

      try {
            const adminData = fs.readFileSync(filePath, 'utf-8')
            const authCredentials = JSON.parse(adminData);

            const authenticatedUsername = authCredentials.username;
            const authenticatedPassword = authCredentials.password;

            if(authenticatedUsername === req.body.username && authenticatedPassword === req.body.password) {
                  res.json({
                        message: "Attempted login successful",
                        date: new Date,
                        loggedIn: true
                  })
            } else {
                  res.json({
                        message: "Attempted login unsuccessful",
                        date: new Date,
                        loggedIn: false
                  })
            }

      }
      catch (error) {
            res.status(500).json({
                  error: error.message
            })
      }
};

module.exports = loginAuth;