const Product = require("../models/Product");

const mainController = {
  home: (req, res) => {
    res.render("index_", { productosMostrados: Product.getRandomProducts(4) });
  },
};

module.exports = mainController;
