const path = require('path');

const registerController = {
    login: (req, res) => {
        res.sendFile(path.resolve('src/views/register.html'))
    }
}

module.exports = registerController;