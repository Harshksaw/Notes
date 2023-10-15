// Q.2 Create a Backend For Counter Web App with Api Endpoint for Managing Counter Using Expresl
// " ‘/’G →G send counter data as {counter:counter^
// " `/increment` → increment counter by 1 and send in response :atest data as {counter:counter^
// " `/decrement` → decrement counter by 1 and send in response :atest data as {counter:counter}
// No#e: Using Express is Mandatory for this Question



const express = require("express")
const app  = express()

let counter = 0

app.get("/",(req,res)=>{
    res.send( "COUNTER = "+counter)    
})

app.get("/increment",(req,res)=>{
    res.send("Counter Increement by 1  ")
    counter++
})


app.get("/decrement",(req,res)=>{
    res.send("Counter Decrement by 1 ")
    counter--
})

app.get("/*",(req,res)=>{
    res.send("page not found")
})

app.listen(400)