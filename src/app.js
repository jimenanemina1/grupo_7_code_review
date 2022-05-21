const express = require('express');
const path = require("path");
const userRouter = require('./routers/user')
const mainRouter = require("./routers/main");
const app = express();
const port = process.env.PORT || 3000;


app.use('/', mainRouter)
app.use('/user', userRouter);


app.use(express.static('public'));

app.listen(port, ()=>{
    console.log(`Servidor funcionando, en el puerto ${port}`);
});

app.set('view engine', 'ejs');
app.set("views", path.resolve(__dirname, "./views"));

app.get('/productDetail', (req,res)=>{
    res.sendFile(__dirname + '/views/productDetail.html');
});

app.get('/shoppingCart', (req,res)=>{
    res.sendFile(__dirname + '/views/shoppingCart.html');
});
