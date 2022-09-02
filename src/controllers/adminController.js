const data = require('../controllers/data');
const fs = require('fs');
const path = require('path');

//const Product = require("../models/Product");

const productsFilePath = path.join(__dirname, '../data/products.json');
//const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));


//const findProduct = (id, allProducts) =>
//  allProducts.find((product) => product.id == id);

let db = require("../database/models");
//const { body } = require('express-validator');
//const { clear } = require('console');

//const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
let editProductId;
const adminController = {
  createProduct: (req, res) => {
    res.render('createProduct.ejs')
  },   
  storeProduct: async (req, res) => {

let imgPath = "/images/default-image.png";
if (req.file) {
  imgPath = `/images/${req.file.filename}`;
}

      try {
        product = await db.Product.create({
          name: req.body.name,
          price:req.body.price,
          discount: req.body.discount,
          size: req.body.size,
          description:req.body.description,
          imgPath: imgPath,
          create_date: new Date(),
          stock: 1,
          categories_id: 2,
          offer: req.body.offer
        });
      } catch (error) {
        console.error(error);
    } 
    res.redirect('/admin/create-congrats');
  },
  
  createCongrats: async (req, res) => {
    try{
      lastProduct = await db.Product.findAll()
      .then(function(products){
        return products.pop()
    })
  }catch (error) {
      console.error(error);
  }
    res.render('createProductCongrats.ejs', {
      items: lastProduct
    })
 
    
  },


  editProduct: async(req, res) => {
    try{
    const productId = req.params.idProduct
    product = await db.Product.findByPk(productId)
    .then(function(product){
      editProductId = product.id;
      console.log(product)
        return product;
    })
    res.render('editProduct', {
  
        items: product
    })
} catch (error){
    console.log(error)
}
  },
  storeEditedProduct: async(req, res) => {
    try{
    product = await db.Product.update({
        id: editProductId,
        name: req.body.name,
        description: req.body.description,
        price: parseFloat(req.body.price),
        discount: req.body.discount,
        offer: req.body.offer,
        imgPath: req.body.imgPath,
        review: []
      }, {
        where: {
          id: editProductId
        }
      })
    res.redirect('/admin/edit-congrats')

} catch (error){
    console.log(error)
}
  },
  editCongrats: async(req, res) => {
    try{
    product = await db.Product.findByPk(editProductId)
    .then(function(product){
        return product;
    })
    res.render('editProductCongrats', {
      items: product
    })
  } catch (error){
      console.log(error)
  }
  },
  deleteProduct: async (req,res) =>{
    try{
      productToFind = await db.Product.findByPk(req.params.idProduct)
    .then(function(product){
      productToEliminateName = product.name
    })
  
      productToEliminate = await db.Product.destroy({
        where: {
          id: req.params.idProduct
        }
      })

      res.send(`<div style="width:100%;height:100vh; padding:0px; margin:0px; display:flex; justify-content:center; align-items:center">
      <div style="width:300px;border-radius:5px;padding:20px; background-color:#900e1e; color:white; font-size:24px">
          Eliminaste: ${productToEliminateName} <br>
          <div style="background-color:#4a6554; width:120px;padding:10px;text-align:center;border-radius:5px;margin:10px auto; cursor:pointer">
              <a style="text-decoration:none; color:white" href="/"> Ir al inicio </a>
          </div>
      </div>
  </div>`)
  
    } catch (error){
      console.log(error)
  }
      
 
  }
};

module.exports = adminController;
