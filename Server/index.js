const express = require("express");

const app = express();

app.get("/",(req,res)=>{
    console.log("Hello World");
    console.log("Hello World");
})


app.listen(4000,()=>{
    console.log("Server is running 4000 Port");

})