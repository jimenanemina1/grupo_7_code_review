const express = require("express");
const categoryController = require("../../controllers/api/categoryController")
const router = express.Router();


// apis/users
router.get("/", categoryController.listAll)
router.get("/:id", categoryController.detail)

module.exports = router;
