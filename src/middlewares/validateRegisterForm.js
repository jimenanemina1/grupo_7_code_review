const path = require("path");
const { body } = require("express-validator");

module.exports = [
  body("name")
    .notEmpty()
    .withMessage("Escribe tu nombre")
    .bail()
    .isAlpha("es-ES", {ignore: " "})
    .withMessage("Escribe un nombre válido").trim()
    .bail(),

  body("lastname")
    .notEmpty()
    .withMessage("Escribe tu apellido")
    .bail()
    .isAlpha("es-ES", {ignore: " "})
    .withMessage("Escribe un apellido válido").trim()
    .bail(),

  body("email")
    .notEmpty()
    .withMessage("Escribe tu email")
    .bail()
    .isEmail()
    .withMessage("Escribe un correo electrónico válido").trim()
    .bail(),

  body("password")
    .notEmpty()
    .withMessage("Escribe tu contraseña")
    .bail()
    .isLength({ min: 6 })
    .withMessage("Tu contraseña debe tener mínimo 8 caracteres")
    .bail()
    .matches(/[A-Z]/)
    .withMessage("Tu contraseña debe tener al menos una letra mayúscula")
    .bail()
    .matches(/\d/)
    .withMessage("Tu contraseña debe tener al menos un número")
    .bail()
    .matches(/[!@#$%^&*(),.?":{}|/<>]/)
    .withMessage("Tu contraseña debe tener al menos un caracter especial")
    .bail(),

  body("confirmPassword").custom((value, { req }) => {
    if (value !== req.body.password) {
      throw new Error("Las contraseñas no coinciden");
    }

    return true;
  }),

  body("avatar").custom((value, { req }) => {
    if(req.file){
    let file = req.file;
    let fileExtension = path.extname(file.originalname);
    let validExtensions = [".jpg", ".jpeg", ".png", ".gif"];

    if (!validExtensions.includes(fileExtension)) {
      throw new Error(
        `Las extensiones de archivo permitidas son ${validExtensions.join(" ")}`
      );
    }}
    return true;
  })
];
