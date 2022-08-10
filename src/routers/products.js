const express = require('express');
const multer = require("multer");
const path = require("path");

// ************ Multer ************
const normalizeWordsArray = (words) =>
  words
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .split(" ");
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.join(__dirname, "../../public/images"));
  },
  filename: (req, file, cb) => {
    cb(
      null,
      `img-${normalizeWordsArray(req.body.name).join("-")}-${Date.now()}${path.extname(file.originalname)}`
    );
  },
});

const upload = multer({ storage });

//************************* */



const productsController = require('../controllers/productsController');

const router = express.Router();


router.get('/:idProduct', productsController.detail);
router.get('/', productsController.list);
router.get('/searchForm', productsController.searchForm)
router.get('/search/:searchWord',productsController.find)



module.exports = router;