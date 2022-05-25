const express = require('express');

const shoppingCartController = require('../controllers/shoppingCartController');

const router = express.Router();

router.get("/", shoppingCartController.shoppingCart);


module.exports = router;