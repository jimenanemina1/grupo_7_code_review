const path = require("path");
const multer = require("multer");
const normalizeWordsArray = (words) =>
  words
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .split(" ");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.join(__dirname, "../../public/images/avatars"));
  },
  filename: (req, file, cb) => {
    cb(
      null,
      `avatar-${Date.now()}${path.extname(file.originalname)}`
    );
  },
});

const fileFilter = (req, file, cb) => {
  const ALLOWED_MIME_TYPES = ["image/jpg", "image/jpeg", "image/png", "image/gif"];
  if(!ALLOWED_MIME_TYPES.includes(file.mimetype)) {
      file.error = 'type';
      req.file = file;
      return cb(null, false);
  }
  return cb(null, true);
}

const upload = multer({ storage, fileFilter });

module.exports = upload;