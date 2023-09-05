const fs = require('fs');
const path = require('path');

const loginAuth = (req, res) => {
      const filePath = path.join(__dirname, '../data/admin.json');
      const adminData = fs.readFileSync(filePath, 'utf-8')

      console.log(req.body)

      const response = JSON.parse(adminData);
      console.log(req.body);

      res.json({
            message: "Response",
            data: response
      })
};

module.exports = loginAuth;