
const os = require("os")

const osName = os.type()
const osRelease = os.release()


console.log('OS Name:', osName);
console.log('OS Release Version:', osRelease);