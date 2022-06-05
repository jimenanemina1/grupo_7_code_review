const data = require('../controllers/data');
const fs = require('fs');
const path = require('path');


const productsFilePath = path.join(__dirname, '../data/products.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));
const findProduct = (id, allProducts) =>
  allProducts.find((product) => product.id == id);

const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

const adminController = {
  createProduct: (req, res) => {
    res.render('createProduct.ejs')
  },
  storeProduct:(req, res) => {
     let imgPath = '/images/default-image.png'
		if(req.file){
			imgPath = `/images/${req.file.filename}`
		}
		const newProduct = {
			id: products[products.length - 1].id +1,
			...req.body,
			price: parseInt(req.body.price),
			discount: parseInt(req.body.discount),
      offer: JSON.parse(req.body.offer),
			imgPath,
      review: []

		}
    console.log(newProduct)
		products.push(newProduct);
		fs.writeFileSync(productsFilePath, JSON.stringify(products, null, ' '));
		res.redirect('/admin/create-congrats');
	},
  createCongrats: (req, res) => {
    res.render('createProductCongrats.ejs')
  },
  editProduct: (req, res) => {
    const product = products.find(items => items.id == req.params.idProduct)
    res.render('editProduct.ejs', {
      items: product
    })
  },
  editCongrats: (req, res) =>{
    res.render('editProductCongrats')
  },
  storeEditedProduct: (req, res) => {
    console.log("entre aca")
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
    let productToEliminate = findProduct(req.params.idProduct, products);
    let index = products.findIndex(product => product.id == productToEliminate.id);
    products.splice(index,1);
    fs.writeFileSync(
      productsFilePath,
      JSON.stringify(products, null, " ")
    );
    res.send(`Eliminaste: ${productToEliminate.name} <br> <a href="/"> Ir al inicio </a>`)

  }
};

module.exports = adminController;
