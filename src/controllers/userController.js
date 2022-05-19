const path = require('path');

const userController = {
    login: (req, res) => {
        res.render(path.resolve('src/views/login.ejs'))
    },
    register: (req, res) => {
        res.render(path.resolve('src/views/register.ejs'))
    }
}

module.exports = userController;