const fs = require("fs")
const path = require("path")

const filePath = path.join(__dirname,"nodejs_architecture.txt")
fs.unlink(filePath,function(err,data){
    if (err) {
        console.log("error in deleleting time")
    }
    console.log("DELETE DONE")
})