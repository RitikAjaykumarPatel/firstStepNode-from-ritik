var http = require("http")
var a = 1
var b = 1
var c = a+b
var msg

if(c==30){
    msg = "sum is more then 30"
}else{
    msg = "sum is less then 30"
}
http.createServer((req,res)=>{
    res.writeHead(200,{'content-type':'text/html'})
    res.write("A is " +a)
    res.write("<br>B is " +b)
    res.write(`<br>sum is ${a+b}`)
    res.end("<br>"+msg+"<br>done")
}).listen(4000)
console.log("http://127.0.0.1:4000")
