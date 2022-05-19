const express = require('express');

const userRouter = require('./routers/user')

const app = express();
app.set('view engine', 'ejs');


const port = process.env.PORT || 3000;

app.use('/user', userRouter);


app.use(express.static('public'));

app.listen(3001, ()=>{
    console.log('Servidor funcionando, en el puerto 3001');
});

app.get('/', (req,res)=>{
    res.sendFile(__dirname + '/views/index.html');
});

app.get('/index_', (req,res)=>{
    res.sendFile(__dirname + '/views/index_.html');
});

app.get('/productDetail', (req,res)=>{
    res.sendFile(__dirname + '/views/productDetail.html');
});

app.get('/shoppingCart', (req,res)=>{
    res.sendFile(__dirname + '/views/shoppingCart.html');
});
