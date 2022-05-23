const express = require('express');

const shoppingCartController = require('../controllers/shoppingCartController');

const router = express.Router();

router.get("/shoppingCart", shoppingCartController.cart);

module.exports = router;