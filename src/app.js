const express = require('express');
const path = require("path");
const userRouter = require('./routers/user');
const mainRouter = require("./routers/main");
const adminRouter = require("./routers/admin");
const productRouter = require("./routers/products");
const shoppingCartRouter = require("./routers/shoppingCart");
const methodOverride =  require('method-override');


const app = express();
const port = process.env.PORT || 3001;


app.use('/', mainRouter)
app.use('/user', userRouter);
app.use('/admin', adminRouter);
app.use('/products', productRouter);
app.use('/shopping-cart', shoppingCartRouter);

app.use(express.urlencoded({ extended: false }));

app.use(express.static('public'));

app.listen(port, ()=>{
    console.log(`Servidor funcionando, en el puerto ${port}`);
});

app.set('view engine', 'ejs');
app.set("views", path.resolve(__dirname, "./views"));

