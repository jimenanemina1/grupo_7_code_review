// const data = require("./data")

const res = require("express/lib/response");
const fs = require("fs");
const path = require("path");
const db = require("../database/models");

const productsFilePath = path.join(__dirname, "../data/products.json");
const products = JSON.parse(fs.readFileSync(productsFilePath, "utf-8"));
const toThousand = (n) => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");


const productsController = {
    detail: async(req, res) => {
        try{
        const productId = req.params.idProduct
        product = await db.Product.findByPk(productId)
        .then(function(product){
            return product;
        })
        console.log(JSON.stringify(product))
        res.render('productDetail', {
            items: product
        })
    } catch (error){
        console.log(error)
    }
    },
    list: (req, res) => {
         res.render("listProducts", { productosMostrados: products }) ;
         }   
}

module.exports = productsController;
