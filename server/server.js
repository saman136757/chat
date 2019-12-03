const path=require('path')
const express=require('express')
const socketIo=require('socket.io')
const http=require('http')

var app=express()
var server=http.createServer(app)
var io=socketIo(server)
io.on('connection',(socket)=>{
    console.log('user connection')
    io.on('disconnect',()=>{
        console.log('user disconnected')
    })
})

const publicPath=path.join(__dirname,'../public')
app.use(express.static(publicPath))

server.listen(3000,()=>{
console.log('saman')
})