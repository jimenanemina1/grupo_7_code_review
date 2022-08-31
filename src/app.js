// ************ Require's ************
const express = require("express");
const path = require("path");
const methodOverride = require("method-override");
const session = require("express-session");
var cookieParser = require('cookie-parser')


// ************ express() ************
const app = express();
const cors = require('cors');
app.use(cors({ origin: '*' }));

const userLogged = require("./middlewares/userLogged.js")
//************ app() listen ************
const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log(`Servidor funcionando, en el puerto ${port}`);
});


// ************ Middlewares ************
app.use(
  session({
    secret: "This is a secret",
    resave: false,
    saveUninitialized: false,
  })
);

app.use(cookieParser());

app.use(userLogged)
app.use(express.static("public"));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(methodOverride("_method"));

// ************ Template Engine ************
app.set("view engine", "ejs");
app.set("views", path.resolve(__dirname, "./views"));

// ************ Route System require and use() ************
const mainRouter = require("./routers/main");
const userRouter = require("./routers/user");
////codigo nuevo apis /////////
const userApiRouter = require("./routers/api/user");
const productApiRouter = require("./routers/api/product");
const adminRouter = require("./routers/admin");
const productRouter = require("./routers/products");
const shoppingCartRouter = require("./routers/shoppingCart");

app.use("/", mainRouter);
app.use("/user", userRouter);
app.use("/admin", adminRouter);
app.use("/products", productRouter);
app.use("/shopping-cart", shoppingCartRouter);
////codigo nuevo apis /////////
app.use("/api/users", userApiRouter)
app.use("/api/products", productApiRouter)