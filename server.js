var http = require('http')

http.createServer((req,res)=>{
    res.end("<h1>This is ritik's server</h1>")
}).listen(4010)

console.log('http://127.0.0.1:4010')