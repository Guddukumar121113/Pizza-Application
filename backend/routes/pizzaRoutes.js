const express = require('express')
const router= express.Router();

const pizza = require ('../model/pizzaModel')



router.post('/', async(req, res)=>{

    try{
    const data = req.body
  
     const newPizza=  new pizza(data);
  
     const response = await newPizza.save() ;
  
     res.json(response);
  
    }
    catch(err){
  
      throw err;
  
  
  
    }
  });

 router.get('/',async(req,res)=>{
    const data =await pizza.find({}).exec();
    res.status(200).json({"Vegetarian":data});

 })


  module.exports = router;