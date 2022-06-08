const express = require('express');

const shoppingCartController = require('../controllers/shoppingCartController');

const router = express.Router();

router.get("/:id", shoppingCartController.shoppingCart);


module.exports = router;