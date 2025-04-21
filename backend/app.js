 const express = require('express');
//import Products from '../frontend/src/modules/dasebord/components/Products';

const app =  express();
const cors= require('cors');
const db = require('./db');

app.use(cors());

const bodyParser = require('body-parser');
  app.use(bodyParser.json());

const routerx = require('./routes/pizzaRoutes');
app.use('/pizzas', routerx);

 

app.get('/sc',(req,res)=>{
    res.send('pr');
})

app.listen(4000, err=>{
    if (err) {
        console.log('Server Crash',err);
        
    }
    else{
        console.log('Server up and Running');
        
    }
    
})