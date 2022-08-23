const express = require("express");
const productController = require("../../controllers/api/productController")
const router = express.Router();


// apis/users
router.get("/", productController.listAll)
router.get("/:id", productController.detail)

module.exports = router;
