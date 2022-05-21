const express = require("express");
const router = express.Router();

const mainController = require("../controllers/mainController");

router.get("/", mainController.index);
router.get("/productDetail", mainController.productDetail);
router.get("/login", mainController.login);
router.get("/register", mainController.register);
router.get("/shoppingCart", mainController.shoppingCart);


module.exports = router;