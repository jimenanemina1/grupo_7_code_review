const {body} = require("express-validator");

module.exports = [
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
]