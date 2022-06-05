const express = require("express");
const multer = require("multer");
const path = require("path");
const adminController = require("../controllers/adminController");
const router = express.Router();

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

router.get('/create-product', adminController.createProduct);
router.post('/create-product', upload.single('imgPath'), adminController.storeProduct);
router.put('/edit-product/:idProduct', upload.single('imgPath'), adminController.storeEditedProduct);
router.get('/edit-product/:idProduct', upload.single('imgPath'), adminController.editProduct);
router.get('/edit-congrats', adminController.editCongrats);
router.get('/create-congrats', adminController.createCongrats);
router.delete("/delete/:idProduct", adminController.deleteProduct);


module.exports = router;