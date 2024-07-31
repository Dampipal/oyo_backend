const express = require('express')

const app = express()

const PORT = 3009

app.get("/", (req,res) =>{
    res.send("Welcome To OYO Backend")
})

app.listen(PORT,()=>{
    console.log(`Server Running port ${PORT}`);
})