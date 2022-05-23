const path = require('path');

const shoppingCartController= {
    cart: (req, res) => {
        res.sendFile(path.resolve('src/views/shoppingCart.html'))
    }
};

module.exports = shoppingCartController;