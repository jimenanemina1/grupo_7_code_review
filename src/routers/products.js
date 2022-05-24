const express = require('express');


const productsController = require('../controllers/productsController');

const router = express.Router();

router.get("/create-product", productsController.createProduct);
router.get("/edit-product/:idProduct", productsController.editProduct);
router.get("/edit-congrats", productsController.editCongrats);
router.get("/create-congrats", productsController.createCongrats);
router.get('/:idProduct', productsController.detail);



module.exports = router;