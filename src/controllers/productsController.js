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
        const product = products.find(items => items.id == req.params.idProduct)
            // let productosMostrados = [];
            // products.forEach(element => {
            //     productosMostrados.push(element)
            // });
            //  while (productosMostrados.length < 4) {
            //    let randomProduct = products[Math.floor(Math.random() * products.length)];
            //    productosMostrados.indexOf(randomProduct) == -1
            //      ? productosMostrados.push(randomProduct)
            //      : "";
            //  }
             res.render("listProducts", { productosMostrados: products });
         }
}

module.exports = productsController;
