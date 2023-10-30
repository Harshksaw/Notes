const fs = require('fs');
const path = require("path")

const filePath = path.join(__dirname,"nodejs_architecture.txt")

fs.readFile(filePath,"utf-8",function(Err,data){
    if (Err) {
        console.log("Error in reading")
    }
    console.log(data)
})
