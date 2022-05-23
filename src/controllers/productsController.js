const productsController = {
    createProduct: (req, res) => {
        res.render('createProduct.ejs')
    },
    editProduct: (req, res) => {
        res.render('editProduct.ejs')
    },
    congrats: (req, res) => {
        res.render('congrats.ejs')
    }
}

module.exports = productsController;