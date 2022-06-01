const fs = require("fs");
const path = require("path");

const productsFilePath = path.join(__dirname, "../data/products.json");
const products = JSON.parse(fs.readFileSync(productsFilePath, "utf-8"));

const mainController = {
  home: (req, res) => {
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
