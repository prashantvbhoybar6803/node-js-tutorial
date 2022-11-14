const http = require('http')

const server  = http.createServer((req,res)=>{
    // console.log(req)
    if(req.url === '/'){
        res.write('Welcome to noode js home page.')
    }
    
    if(req.url === '/about'){
        res.write('Welcome to noode js about page.')
    }
    res.end(
        `<h1>OOps!</h1>`
    )
})

server.listen(5000)