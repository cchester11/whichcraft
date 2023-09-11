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

const loginAuth = async (req, res) => {
      try {
            const filePath = path.join(__dirname, '../data/admin.json');

            const request_body = {
                  username: req.body.username,
                  password: req.body.password
            };
            let creds = [];

            // authUsername and authPassword will be the pulled values from adminjson
            const data = fs.readFileSync(filePath, 'utf-8');

            creds.push(JSON.parse(data))

            let authUsrname = creds[0].username;
            let authPassword = creds[0].password;

            let authenticateUsrname = await bcrypt.compare(request_body.username, authUsrname);
            let authenticatePassword = await bcrypt.compare(request_body.password, authPassword);

            if (
                  authenticateUsrname && authenticatePassword
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
