const express = require('express');


const productsController = require('../controllers/productsController');

const router = express.Router();

router.get("/create-product", productsController.createProduct);
router.get("/congrats", productsController.congrats);
router.get('/:idProduct', productsController.detail);



module.exports = router;