'use strict'; 
const errorHandler=require("../error-handlers/500")
module.exports =(req ,res ,next )=>{


        let regx = /^[a-zA-Z]+$/;
        if (regx.test(req.query.name)) {
          next();
        }
        else if (req.query.name === "") {
          req.query.name = "";
          next('The name is required');
        }
        else if (!regx.test(req.query.name)) {
          req.query.name = "wrong Name";
          next('The name should be a string');
        }
      
    
   

//     if(req.query.name===""){
//         console.log("case empty");
//       errorHandler();
//         next(); 
//     }else if(typeof (req.query.name) === 'string'){

//        console.log(`${req.query.name}  is valid`); 
// next();
//     } else if(req.path.query != "/person?name" ){
//         console.log(`${req.path.query}this path  no found `);
//         errorHandler();
        
//     }else if(parseInt(req.query.name) === 'number'){
// console.log("case number");
// errorHandler(); 
// next();
//     }
    
    
 
// let val= req.query.name;
// function isNum(val){
//     return !isNaN(val)
//   };
// if(isNum(val)==false){
// console.log(`${val}  is valid`)
   
//     console.log(req.query);
//     next();
// } else  {
//     var emoji = String.fromCodePoint(0x1F621)
//     var emoji2 = String.fromCodePoint(0x1F622)
//     console.log(`${val}   is not valid , please write a string ${emoji}${emoji2}${emoji} `);
    
//     res.status(500).send({
//         code: 500,
//         route: req.path,
//         message: "page not found",
//     });
    
// }


   
    
}

