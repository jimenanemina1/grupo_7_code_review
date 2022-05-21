const path = require('path');

const userController = {
    login: (req, res) => {
        res.sendFile(path.resolve('src/views/login.html'))
    },
    register: (req, res) => {
        res.sendFile(path.resolve('src/views/register.html'))
    }
}

module.exports = userController;