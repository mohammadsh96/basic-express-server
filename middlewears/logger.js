'use strict';

module.exports =(req ,res , next)=>{
console.log("it is logging ")
    console.log(req.method ,req.path);
    
    next();
}