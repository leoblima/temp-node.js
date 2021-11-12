// Built-in Modules

const os = require('os')

//Info do usario atual 

const user = os.userInfo()
console.log(user)

// method returns the system uptime in seconds

console.log(`The system uptime ${os.uptime()}  seconds`)

const currentOS = {
    name: os.type(), 
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem(),
}
console.log(currentOS)