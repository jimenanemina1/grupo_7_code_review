const db = require("../database/models");
const getRandomProducts = require("../helpers/getRandomProducts");

const mainController = {
  home: async (req, res) => {
    // res.render("index_", { productosMostrados: Product.getRandomProducts(4) });
    try {
      let products = await db.Product.findAll();
      res.render("index_", {
        productosMostrados: getRandomProducts(4, products),
      });
    } catch (error) {
      console.log(error);
    }
  },
};

module.exports = mainController;
