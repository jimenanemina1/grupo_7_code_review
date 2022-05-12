const express = require('express');
const app = express();
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

app.get('/register', (req,res)=>{
    res.sendFile(__dirname + '/views/register.html');
});

app.get('/login', (req,res)=>{
    res.sendFile(__dirname + '/views/login.html');
});
