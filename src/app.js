const express = require('express');
const path = require("path");
const userRouter = require('./routers/user');
const mainRouter = require("./routers/main");
const productRouter = require("./routers/products");

const app = express();
const port = process.env.PORT || 3001;


app.use('/', mainRouter)
app.use('/user', userRouter);
app.use('/products', productRouter);


app.use(express.static('public'));

app.listen(port, ()=>{
    console.log(`Servidor funcionando, en el puerto ${port}`);
});

app.set('view engine', 'ejs');
app.set("views", path.resolve(__dirname, "./views"));

