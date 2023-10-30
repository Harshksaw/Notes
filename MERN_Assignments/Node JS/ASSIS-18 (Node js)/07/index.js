const http = require("http")

const port = 5000;
const server = http.createServer((req,res)=>{
    res.statusCode = 200
    res.write("I Am Happy To Learn Full Stack Web Development From PW Skills!")
    res.end()
})

server.listen(port)