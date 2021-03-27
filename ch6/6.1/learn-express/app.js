const express = require('express')
const path = require("path")
const { nextTick } = require('process')
const app = express()


app.set('port', process.env.PORT || 3000)

app.use((req,res,next)=>{
  console.log('hi')
  next()
})

app.use((req,res,next)=>{
  res.sendFile(path.join(__dirname,'index1.html'))
  next()
})

app.get('*', (req,res)=>{
  res.sendFile(path.join(__dirname,'index1.html'))
})

app.get('/', (req,res)=>{
  res.sendFile(path.join(__dirname,'index.html'))
})

app.post('/', (req,res)=>{
  res.send('hello express')
})

app.get('/about', (req,res)=>{
  res.send('hi')
})


app.get('/category/:name',(req,res)=>{
  console.log(`hello wildcard`)
})



app.listen(app.get('port'),()=>{
  console.log('익스프레스 서버 실행 실행')
})