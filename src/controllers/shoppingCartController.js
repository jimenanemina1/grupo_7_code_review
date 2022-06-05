const data = require('./data');

const shoppingCartController = {
    shoppingCart: (req, res) => {
        const product = data.find(items => items.id == req.params.id)
        res.render('shoppingCart', {
            items: product
        })
    }
}

module.exports = shoppingCartController;

