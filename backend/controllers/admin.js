require('dotenv').config({ path: '../.env' })
const bcrypt = require('bcrypt');
const path = require('path');
const fs = require('fs');
const generateToken = require('../helpers/generateToken');

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
                  const tokenPath = path.join(__dirname, '../data/token.json');
                  let adminToken = generateToken(15)

                  //encrypt the token
                  const clientSideToken = await bcrypt.hash(adminToken, 10)

                  let token = {
                        adminToken: adminToken
                  }

                  fs.writeFileSync(tokenPath, JSON.stringify(token), 'utf-8')

                  res.json({
                        message: 'Attempted login successful',
                        date: new Date(),
                        loggedIn: true,
                        adminToken: clientSideToken
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

const checkAuthStatus = async (req, res) => {
      try {
            const tokenPath = path.join(__dirname, '../data/token.json');
            const grabServerToken = fs.readFileSync(tokenPath, 'utf-8');

            const clientToken = req.body.clientToken;
            console.log('clientToken checking for auth status: ' + clientToken)
            const adminTokenHash = JSON.parse(grabServerToken).adminToken;
            console.log('adminToken checking for auth status: ' + adminTokenHash)

            if (!clientToken || !adminTokenHash) {
                  return res.status(400).json({ status: false, message: 'Invalid tokens' });
            }

            // Compare the hashed client token with the admin token hash
            let compare = await bcrypt.compare(adminTokenHash, clientToken);

            if (compare == false) {
                  return res.json({ status: false, message: 'Authentication failed' });
            } else if (compare == true) {
                  return res.json({ status: true, message: 'Authentication successful' });
            }
      } catch (error) {
            console.error('Error checking auth status:', error);
            return res.status(500).json({ status: false, message: 'Internal server error' });
      }
};

const destroyAuth = async (req, res) => {
      try {
            const clientToken = req.body.clientToken;
            const tokenPath = path.join(__dirname, '../data/token.json');
            const grabServerToken = fs.readFileSync(tokenPath, 'utf-8');
            const adminToken = JSON.parse(grabServerToken).adminToken;

            if(!clientToken || !adminToken) {
                  return res.status(400).json({ 
                        message: "Insufficient tokens"
                  })
            }

            let compare = await bcrypt.compare(adminToken, clientToken)

            if(compare == true) {
                  // delete serverside token
                  delete adminToken

                  fs.writeFileSync(tokenPath, JSON.stringify('{}'), 'utf-8')
                  
                  res.status(201).json({
                        message: "Successful request. Token destroyed.",
                        match: true
                  })
            } else {
                  res.status(400).json({
                        message: "Tokens do not match. Invalid request.",
                        match: false
                  })
            }
      } catch (error) {
            console.error('Error destroying auth token: ' + error);
            return res.status(500).json({ 
                  message: 'Error destroying auth token',
                  error: error 
      })
      }
};

module.exports = { createAdmin, loginAuth, checkAuthStatus, destroyAuth };
