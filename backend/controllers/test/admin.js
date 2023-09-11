require('dotenv').config({ path: '../../.env'});
const bcrypt = require('bcrypt');

const loginAuth = async (req, res) => {
      try {
            const authUsername = await bcrypt.hash(process.env.ADMIN_USERNAME, 10, (err, hash) => {
                  if (err) {
                        return err
                  } else {
                        return hash
                  }
            })
            const authPassword = await bcrypt.hash(process.env.ADMIN_PASSWORD, 10, (err, hash) => {
                  if (err) {
                        return err
                  } else {
                        return hash
                  }
            });
            console.log(authPassword)

            const bcryptUsernameCheck = await bcrypt.compare(req.body.username, authUsername, (err, result) => {
                  if (err) {
                        return err
                  } else {
                        return result
                  }
            });
            const bcryptPasswordCheck = await bcrypt.compare(req.body.password, authPassword, (err, result) => {
                  if (err) {
                        return err
                  } else {
                        return result
                  }
            })

            if (
                  bcryptUsernameCheck === true &&  bcryptPasswordCheck === true
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

module.exports = loginAuth;