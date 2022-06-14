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

const upload = multer({ storage });

module.exports = upload;