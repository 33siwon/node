const http = require('http')

http.createServer((req,res)=>{
    res.writeHead(200,{'Content-type':'text/html;charset=utf-8'})
    res.write('<h1>hello world! 8080</h1>')
    res.end('<p>hello server!</p>')
})
.listen(8080, ()=>{
    console.log('8080번 포트에서 연결중입니다.')
})


http.createServer((req,res)=>{
    res.writeHead(200,{'Content-type':'text/html;charset=utf-8'})
    res.write('<h1>hello world! 8081</h1>')
    res.end('<p>hello server!</p>')
})
.listen(8081, ()=>{
    console.log('8081번 포트에서 연결중입니다.')
})
