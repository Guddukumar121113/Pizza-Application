const mongoose= require('mongoose');

const mongoURL = 'mongodb://127.0.0.1:27017/pizzas'

mongoose.connect(mongoURL,{
    useNewUrlParser: true,
    useUnifiedTopology: true 
})

const db = mongoose.connection;

db.on('connected', ()=>{
    console.log('connect to mogodb server');
    
});

db.on('error', (err)=>{
    console.log('mogoddb connection error:',err);
    
});

db.on('disconnected', ()=>{
    console.log('monogdb disconnnect');
    
});

module.exports=db;