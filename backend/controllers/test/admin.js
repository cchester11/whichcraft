require('dotenv').config({ path: '../../.env'});
const bcrypt = require('bcrypt');

const loginAuth = async (req, res) => {
      try {
            const authUsername = await bcrypt.hash(process.env.ADMIN_USERNAME, 10);
            const authPassword = await bcrypt.hash(process.env.ADMIN_PASSWORD, 10);

            const bcryptUsernameCheck = await bcrypt.compare(req.body.username, authUsername);
            const bcryptPasswordCheck = await bcrypt.compare(req.body.password, authPassword);

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