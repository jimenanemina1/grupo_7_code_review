const data = require('../controllers/data');
const fs = require('fs');
const path = require('path');

const Product = require("../models/Product");

const productsFilePath = path.join(__dirname, '../data/products.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));


const findProduct = (id, allProducts) =>
  allProducts.find((product) => product.id == id);

let db = require("../database/models");
const { body } = require('express-validator');
const { clear } = require('console');

const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

const adminController = {
  createProduct: (req, res) => {
    res.render('createProduct.ejs')
  },
    ////////////create begin //////////////
   
  storeProduct: async (req, res) => {
    console.log("ESTO ES EL BODY" + req.body.name)
      try {
        product = await db.Product.create({
          name: req.body.name,
          price:req.body.price,
          discount: req.body.discount,
          size: req.body.size,
          description:req.body.description,
          imgPath: '/images/${req.file.filename}',
          create_date: "2022-07-20 00:48:03",
          stock: 1,
          categories_id: 2,
          offer: req.body.offer
        });
      } catch (error) {
        console.error(error);
    } 
    res.redirect('/admin/create-congrats');
  },
  //    let imgPath = '/images/default-image.png'
	// 	if(req.file){
	// 		imgPath = `/images/${req.file.filename}`
	// 	}
	// 	const newProduct = {
	// 		id: products[products.length - 1].id +1,
	// 		...req.body,
	// 		price: parseInt(req.body.price),
	// 		discount: parseInt(req.body.discount),
  //     offer: JSON.parse(req.body.offer),
	// 		imgPath,
  //     review: []

	// 	}
  //   productIdForCongrats = newProduct.id;
  //   console.log(newProduct)
	// 	products.push(newProduct);
	// 	fs.writeFileSync(productsFilePath, JSON.stringify(products, null, ' '));
	// 	 res.redirect('/admin/create-congrats');
  // },
  ////////////create end //////////////
  createCongrats: async (req, res) => {
    try{
      lastProduct = await db.Product.findAll()
      .then(function(products){
        return products.pop()
    })
  }catch (error) {
      console.error(error);
  }

   lastProduct = (lastProduct.toJSON())
    let product = products.find(items => items.id = lastProduct.id);
    console.log(JSON.stringify(product))
    res.render('createProductCongrats.ejs', {
      items: product
    })
 
    
  },
  editProduct: (req, res) => {
    const product = products.find(items => items.id == req.params.idProduct)
    res.render('editProduct.ejs', {
      items: product
    })
  },
  editCongrats: (req, res) =>{
    const product = products.find(items => items.id == productIdForEditCongrats)
    res.render('editProductCongrats', {
      items: product
    })
  },
  storeEditedProduct: (req, res) => {
    console.log("entre aca")
    productIdForEditCongrats = req.params.idProduct;
    const product = products.find(items => items.id == req.params.idProduct)
     let imgPath = product.imgPath;
		if(req.file){
			imgPath = `/images/${req.file.filename}`
		}
		const editedProduct = {
			id: req.params.idProduct,
      ...product,
			...req.body,
			price: parseInt(req.body.price),
			discount: parseInt(req.body.discount),
      offer: req.body.offer === "true",
			imgPath,
      review: []

		}
    console.log(editedProduct)
    const index = products.findIndex(element => element.id == req.params.idProduct)
    console.log(index)
    if(index !== -1){
      products[index] = editedProduct
    }
		fs.writeFileSync(productsFilePath, JSON.stringify(products, null, ' '));
    console.log("producti edurado" + JSON.stringify(products[req.params.idProduct]))
    res.redirect('/admin/edit-congrats')
  },
  deleteProduct: (req,res) =>{
    let productToEliminate = Product.findById(req.params.idProduct)
    Product.delete(productToEliminate.id)
    res.send(`<div style="width:100%;height:100vh; padding:0px; margin:0px; display:flex; justify-content:center; align-items:center">
    <div style="width:300px;border-radius:5px;padding:20px; background-color:#900e1e; color:white; font-size:24px">
        Eliminaste: ${productToEliminate.name} <br>
        <div style="background-color:#4a6554; width:120px;padding:10px;text-align:center;border-radius:5px;margin:10px auto; cursor:pointer">
            <a style="text-decoration:none; color:white" href="/"> Ir al inicio </a>
        </div>
    </div>
</div>`)

  }
};

module.exports = adminController;
