const express = require('express')
const path = require('path')

const app = express()

app.set('port', process.env.PORT || 3000)

app.use((req,res,next)=>{
  console.log('모든 요청에서 다 실행됩니다.')
  next()
})

app.get('/', (req,res,next)=>{
  console.log('GET / 요청에서만 실행됩니다.')
  // res.setHeader('Content-Type','text/html')
  res.send('홈 화면 입니다.')
  next()
}
)
app.get('/about',(req,res)=>{
      res.sendFile(path.join(__dirname,'/index.html'))
})
app.post('/',(req,res)=>{
  res.send('hello world')
})

// app.use((req,res,next)=>{
//   res.send('404입니다만')
// })

app.use((err,req,res,next)=>{
  console.log(err)
  res.send('hey error')
})

app.listen(app.get('port'), (req,res)=>{
  console.log('익스프레스 서버 실행')
})