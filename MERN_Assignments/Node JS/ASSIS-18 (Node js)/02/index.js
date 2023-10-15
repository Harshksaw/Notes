
const fs = require('fs');
const details = "node. js is an open-source, cross-platform JavaScript runtime environment and library for running web applications outside the client's browser. Ryan Dahl developed it in 2009, and its latest iteration, version 15.14, was released in April 2021. Developers use Node"
fs.writeFile('nodejs_architecture.txt',details,function(Err){
    if (Err) {
        console.log("Error in wrtting in file")
    }
    console.log("writting in file DONE");
})
