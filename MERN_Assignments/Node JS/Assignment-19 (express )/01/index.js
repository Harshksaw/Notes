// Q.1 Bui:d a Server Using Http Modu:e Node<S with api endpoints for Getting Products Dat9
// " ‘/’G →G send msg as “We:come to Men & Women Dummy Data”F
// " G‘/men’ →G send 10 products data of menF
// " ‘/women’G →G send 10 products data of wome;
// " ‘/other’G → send response as page not found
// Hin#: You can use any data, send data in json format









const express = require("express")
const app = express()

const menData = [
    { id:1  , name:"men t-shirt",brand:"ABC",price:420,size:"M" },
    { id:2  , name:"men shirt",brand:"ABC",price:420,size:"M" },
    { id:3  , name:"men black shirt",brand:"ABC",price:420,size:"M" }
]

const WomenData = [
    { id:1  , name:"women t-shirt",brand:"ABC",price:420,size:"M" },
    { id:2  , name:"women shirt",brand:"ABC",price:420,size:"M" },
    { id:3  , name:"women black shirt",brand:"ABC",price:420,size:"M" }
]

app.get("/",(req,res)=>{
    res.send("Welcome to men & women Dummy Data")
})

app.get("/men",(req,res)=>{
    res.send(menData)
})
app.get("/women",(req,res)=>{
    res.send(WomenData)
})
app.get("/*",(req,res)=>{
    res.send("Page not found")
})

app.listen(5000)