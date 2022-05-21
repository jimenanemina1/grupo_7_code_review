const express = require('express');
const path = require('path');

const mainRouter=require("./routers/mainRutes");
const app = express();
app.use(express.static('public'));

app.set('view engine','ejs');
app.set('views',path.resolve(__dirname,'./views'));

app.use('/',mainRouter);


app.listen(3001, ()=>{
    console.log('Servidor funcionando, en el puerto 3001');
});

