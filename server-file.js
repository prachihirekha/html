const http =require('http')
// req =request, res =respose popup mgs
http.createServer((req,res)=>{
    res.write("hello I am node js server.")
    res.end('bye bye')
}).listen(5000)