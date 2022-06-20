const fs = require("fs");
const { validationResult } = require("express-validator");

const validateImageUpload = (req, res, next) => {
  const resultsValidation = validationResult(req);

  if (req.file) {
    if (req.file.error == "type") {
      next();
    } else if (!resultsValidation.isEmpty()) {
      fs.unlinkSync(req.file.path);
    }
  }

  next();
};

module.exports = validateImageUpload;
