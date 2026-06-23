require('dotenv').config();
const express = require('express')
const app = express()
const port = process.env.PORT || 3000;
app.get('/',(req,res)=>{
    const env =
    process.env.APP_ENVIRONMENT || 'unset'
    res.send(`Hello From Ishwarya from AZ-204 Staging
    Environment = ${env}. 
    Host = ${process.env.WEBSITE_SITE_NAME || 'local'}`
    );
})
// app.get('/',(req,res)=>{
//    res.send(`Hello From Ishwarya`);})
app.get('/health',(req,res)=> 
    res.json({status:'ok',time:new Date().toISOString()
    })
);
app.listen(port,()=> 
console.log(`Listing on ${port}`));




