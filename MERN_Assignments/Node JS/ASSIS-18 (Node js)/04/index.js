const { isUtf8 } = require("buffer")
const fs = require("fs")

const path = require("path")
const filePath = path.join(__dirname,"nodejs_architecture.txt")

fs.appendFile(filePath," this is a Appending time ",function(err,data){
    if (err) {
        console.log("Error in appending time")
    }
    console.log("Appending DONE")
})