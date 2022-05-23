const express = require('express');


const productsController = require('../controllers/productsController');

const router = express.Router();

router.get("/create-product", productsController.createProduct);
router.get("/congrats", productsController.congrats);


module.exports = router;