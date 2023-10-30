// Q.4 Build a Server that Generate! Random Number U!ing Epre!
// //  ‘/random’ → !end random number in re!pon!e {random:10}

const express = require("express")
const app  =express()

let randomNuber = Math.floor(Math.random()*100)

app.get("/",(req,res)=>{
    res.send("Go to random route ")
})

app.get("/random",(req,res)=>{
    res.send({ random:randomNuber.toString() })
})

app.listen(600)