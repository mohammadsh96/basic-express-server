'use strict';
const express =require('express');
const app =express();
const PORT =process.env.PORT || 3000;
const logger =require('../middlewears/logger') ;
const validator =require('../middlewears/validator');
const notFoundHandler = require('../error-handlers/404');
const errorHandler = require('../error-handlers/500');

 
 app.get("/data", (req,res)=>{
     console.log("hello from data route");
     res.json ({
     id : "0795956190" , 
     name : "mohammad alsharideh", 
     email : "mhmd.shrydh1996@gmail.com" 
     })
     })
 
 app.get("/bad" , (req ,res)=>{
    let errors = 500 ;
    for(let i =0 ; i<error.length ; i++){
     console.log(me);
     res.json()
     }
     res.status(500).send(me); 
 
     })
app.get("/", (req, res) => {
    res.status(200).send('hello ');
});
app.get("/person" , logger , validator , (req ,res)=>{
    
    res.json( 
        req.query 
    )
   
})
app.use('*', notFoundHandler);
app.use(errorHandler);

function start(PORT) {
app.listen(PORT, ()=>{
console.log(`mohammad on port ${PORT}`);

})
}
 module.exports ={
start : start ,
app : app ,

 }
