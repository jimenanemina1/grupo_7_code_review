const fs = require("fs");
const path = require("path");

const Product = {
  dataPath: path.join(__dirname, "../data/products.json"),

  getProducts: function () {
    return JSON.parse(fs.readFileSync(this.dataPath, "utf-8"));
  },

  findById: function (id) {
    let allProducts = this.getProducts();
    return allProducts.find((product) => product.id == id);
  },

  getRandomProducts: function (numberOfProducts) {
    let allProducts = this.getProducts();
    let randomProducts = [];
    while (randomProducts.length < numberOfProducts) {
      let randomProduct =
        allProducts[Math.floor(Math.random() * allProducts.length)];
      randomProducts.indexOf(randomProduct) == -1
        ? randomProducts.push(randomProduct)
        : "";
    }
    return randomProducts;
  },

  delete: function (idOfProductToEliminate) {
    let allProducts = this.getProducts();
    let productToEliminate = this.findById(idOfProductToEliminate);
    let indexOfProductToEliminate = allProducts.findIndex(product => product.id == productToEliminate.id);
    allProducts.splice(indexOfProductToEliminate, 1);
    fs.writeFileSync(this.dataPath,JSON.stringify(allProducts, null, " "))
    return true;
  },
  
};


module.exports = Product;
