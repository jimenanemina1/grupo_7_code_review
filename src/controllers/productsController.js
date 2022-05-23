const data = require("./data")

const productsController = {
    createProduct: (req, res) => {
        res.render('createProduct.ejs')
    },
    editProduct: (req, res) => {
        res.render('editProduct.ejs')
    },
    congrats: (req, res) => {
        res.render('congrats.ejs')
    },
    detail: (req,res) =>{
        const product = data.find(items => items.id == req.params.idProduct)
        res.render('productDetail',{items:product})
    },
    list: () => data
}

module.exports = productsController;
