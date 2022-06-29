// const data = require("./data")

const res = require("express/lib/response");
const fs = require("fs");
const path = require("path");

const productsFilePath = path.join(__dirname, "../data/products.json");
const products = JSON.parse(fs.readFileSync(productsFilePath, "utf-8"));
const toThousand = (n) => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

const productsController = {
    detail: (req, res) => {
        const product = products.find(items => items.id == req.params.idProduct)
        res.render('productDetail', {
            items: product
        })
    },
    list: (req, res) => {
         res.render("listProducts", { productosMostrados: products }) ;
         }
}

module.exports = productsController;
