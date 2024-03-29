// const data = require("./data")

//const res = require("express/lib/response");
//const fs = require("fs");
const path = require("path");
const db = require("../database/models");
const {Op} = require("../../node_modules/sequelize");

//const productsFilePath = path.join(__dirname, "../data/products.json");
//const products = JSON.parse(fs.readFileSync(productsFilePath, "utf-8"));
//const toThousand = (n) => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");


const productsController = {
    detail: async(req, res) => {
        try{
        const productId = req.params.idProduct
        product = await db.Product.findByPk(productId)
        .then(function(product){
            return product;
        })
        res.render('productDetail', {
            items: product
        })
    } catch (error){
        console.log(error)
    }
    },
    list: async (req, res) => {

        try{
           products = await db.Product.findAll()
            .then(function(products){
                return res.render("listProducts", { productosMostrados: products }) ;
            })
        }  catch (error){
            console.log(error)
        }
        
 },
 searchForm: async (req, res) => {
    try{
    res.render("searchForm.ejs")
} catch(error){
    console.log(error)
}
 },
 find: async (req, res) => {
     let searchWord = req.body.name;
    try{
        product = await db.Product.findOne({
            where:{
                name: {
                    [Op.like]: `%${searchWord}%`
                }
            
            }
            
        })
        if(!product){
            return res.render('searchNotFound')
        }
        return  res.render('productDetail', {
            items: product
        })

    }  catch (error){
        console.log(error)
    }
    
}
}
module.exports = productsController;
