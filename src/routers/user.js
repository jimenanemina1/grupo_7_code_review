const express = require("express");
const router = express.Router();

const userController = require("../controllers/userController");

const registerValidations = require("../middlewares/validateRegisterForm");
const loginValidations = require("../middlewares/validateLoginForm")
const upload = require("../middlewares/multer");
const validateImageUpload = require("../middlewares/validateImageUpload");

router.get("/login", userController.login);
router.post("/login",loginValidations, userController.loginProcess)


router.get("/register", userController.register);

router.get("/userProfile", userController.userProfile);


router.post("/updateUserProfile", userController.updateUserProfile);
router.get("/editUserForm", userController.editUserForm);
router.get("/closeSesion", userController.closeSesion);


router.post("/register",upload.single("avatar"),registerValidations,validateImageUpload,userController.registerProcess);
router.get("/:id", userController.profile);


module.exports = router;
