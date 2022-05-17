const path = require('path');

const loginController = {
    login: (req, res) => {
        res.sendFile(path.resolve('src/views/login.html'))
    }
}

module.exports = loginController;