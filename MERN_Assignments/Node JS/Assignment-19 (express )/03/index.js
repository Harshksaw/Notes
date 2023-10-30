// Q.3_Create a Basic Server with Different Routes using Expresl
// " `/`G G → send response as {msg:`I am homepage`^
// " `/about`G → send response as {msg:`I am about page`^
// " `/contact ` → send response as {emai::`suppor#@pwskills.com`}

const express = require("express")
const app = express()

app.get("/",(req,res)=>{
    res.send("I am Homepage")
})

app.get("/about",(req,res)=>{
    res.send("I am about Page")
})

app.get("/contact",(req,res)=>{
    res.send("Email:abc@gamil.com")
})

app.listen(60000)