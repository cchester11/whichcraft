require('dotenv').config({ path: '../.env' })
const bcrypt = require('bcrypt');
const path = require('path');
const fs = require('fs');

const createAdmin = async (req, res) => {
      try {
            const filePath = path.join(__dirname, '../data/admin.json');

            const request_body = {
                  username: req.body.username,
                  password: req.body.password
            };

            // Hash the username and password using async/await
            const username = await bcrypt.hash(request_body.username, 10);
            const password = await bcrypt.hash(request_body.password, 10);

            const newAdmin = {
                  username: username,
                  password: password
            }

            fs.writeFileSync(filePath, JSON.stringify(newAdmin), 'utf-8')

            res.json({
                  message: "Response",
                  username: username,
                  password: password
            });
      } catch (error) {
            res.status(500).json({
                  error: error.message
            });
      }
};


const loginAuth = (req, res) => {
      try {
            const authUsername = process.env.ADMIN_USERNAME;
            const authPassword = process.env.ADMIN_PASSWORD;
            if (
                  authUsername === req.body.username &&
                  authPassword === req.body.password
            ) {
                  res.json({
                        message: 'Attempted login successful',
                        date: new Date(),
                        loggedIn: true,
                  });
            } else {
                  res.json({
                        message: 'Attempted login unsuccessful',
                        date: new Date(),
                        loggedIn: false,
                  });
            }
      } catch (error) {
            res.status(500).json({
                  error: error.message,
            });
      }
};

module.exports = { createAdmin, loginAuth };
