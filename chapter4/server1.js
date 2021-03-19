const http = require('http');

const server = http.createServer((req,res)=>{
    res.writeHead(200,{'Content-type' : 'text/html; charset=utf-8'})
    res.write('<h1>hello world!</h1>');
    res.end('<p>Hello server!<p>');
}).listen(8080, ()=>{
    console.log('8080번에서 대기중입니다.');
})
server.listen(8080)
server.on('listening', ()=>{
    console.log('8080번 포트에서 서버 대기 중입니다.')
})
server.on('error', (error)=>{
    console.log(error)
})