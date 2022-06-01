const data = require('../controllers/data');
const fs = require('fs');
const path = require('path');


const productsFilePath = path.join(__dirname, '../data/products.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

const adminController = {
  createProduct: (req, res) => {
    res.render('createProduct.ejs')
  },
  storeProduct:(req, res) => {
		console.log(req.file)
    console.log("el body es" + JSON.stringify(req.body))
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
  
  editProduct: (req, res) => {
    const product = data.find(items => items.id == req.params.idProduct)
    res.render('editProduct.ejs', {
      items: product
    })
  },
  createCongrats: (req, res) => {
    res.render('createProductCongrats.ejs')
  },
  editCongrats: (req, res) => {
    res.render('editProductCongrats.ejs')
  }
};

module.exports = adminController;
