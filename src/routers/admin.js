const express = require("express");
const adminController = require("../controllers/adminController");
const router = express.Router();

router.get("/create-product", adminController.createProduct);
router.get("/edit-product/:idProduct", adminController.editProduct);
router.get("/edit-congrats", adminController.editCongrats);
router.get("/create-congrats", adminController.createCongrats);

module.exports = router;