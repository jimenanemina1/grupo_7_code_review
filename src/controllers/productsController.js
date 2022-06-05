// const data = require("./data")

const fs = require("fs");
const path = require("path");

const productsFilePath = path.join(__dirname, "../data/products.json");
const products = JSON.parse(fs.readFileSync(productsFilePath, "utf-8"));

const productsController = {
    detail: (req, res) => {
        const product = products.find(items => items.id == req.params.idProduct)
        res.render('productDetail', {
            items: product
        })
    },
    list: () => data
}

module.exports = productsController;
