// Built in Modules
// Os  ---operating system
// path 
// fs --- File Sytems
// HTTP

// const os = require('os')

// // info about current user
// const user  = os.userInfo()
// // console.log(user)
// // syetem uptime in seconds
// const time  = os.uptime()
// // console.log(time)

// const currentOs = {
//     name:os.type(),
//     release:os.release(),
//     totalMem:os.totalmem(),
//     freeMem:os.freemem()
// }
// console.group(currentOs)

// Path modules(path )

// const path  = require('path') 
// console.log(path.sep)

// const filePath = path.join('/content','subfolder','text.txt')
// console.log(filePath);

//  File Sysytem modules(fs)  ---- can do with two flavours first blocking(synchronous) and nonblocking(Async)

// Synchronous favour
// const {readFileSync,writeFileSync} = require('fs')

// const first = readFileSync('./content/first.txt','utf8')
// const second = readFileSync('./content/second.txt','utf8')

// console.log(first,second)
// writeFileSync('./content/resut_writefile.txt',`Here is the result ${first} , ${second}`)


//  Async flavours of fs

const {readFile,writeFile} = require('fs')
