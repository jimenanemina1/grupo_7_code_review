const express = require('express');

const loginRouter = require('./routers/login')
const registerRouter = require('./routers/register')
const app = express();


const port = process.env.PORT || 3000;

app.use('/', loginRouter);
app.use('/', registerRouter);

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
