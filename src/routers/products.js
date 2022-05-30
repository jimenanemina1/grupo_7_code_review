const express = require('express');


const productsController = require('../controllers/productsController');

const router = express.Router();


router.get('/:idProduct', productsController.detail);



module.exports = router;