const mongoose = require('mongoose');


const pizzaSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    desc:{
        type:String
    },
    image:{
        type:String
    }

   


})

// create student modell

const pizza = mongoose.model('students',pizzaSchema)

module.exports = pizza;