require('dotenv').config({ path: '../.env'})

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

module.exports = loginAuth;
