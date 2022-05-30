const data = require('../controllers/data');

const adminController = {
  createProduct: (req, res) => {
    res.render('createProduct.ejs')
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
