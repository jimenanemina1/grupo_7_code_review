const Product = require("../models/Product");

const mainController = {
  home: (req, res) => {
    let userStatus = req.userStatus;
    if(userStatus == "loggedIn"){
    res.render("index_", { productosMostrados: Product.getRandomProducts(4) });
    } else {
    res.render("index_", { productosMostrados: Product.getRandomProducts(4) });
    }
  },
};

module.exports = mainController;
