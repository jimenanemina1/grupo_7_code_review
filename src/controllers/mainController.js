const productController = require("./productsController");

const mainController = {
  home: (req, res) => {
    let products = productController.list();
    let productosMostrados = [];
    while (productosMostrados.length < 4) {
      let randomProduct = products[Math.floor(Math.random() * products.length)];
      productosMostrados.indexOf(randomProduct) == -1
        ? productosMostrados.push(randomProduct)
        : "";
    }
    res.render("index_", { productosMostrados: productosMostrados });
  },
};

module.exports = mainController;
