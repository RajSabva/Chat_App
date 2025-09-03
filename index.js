const express = require('express');
const app = express();
const { Server } = require("socket.io");
const http = require('http')
const path = require('path')


const server = http.createServer(app);
const io = new Server(server);

app.get('/', (req,res)=>{
    res.sendFile(path.join(__dirname,'index.html'))
});


io.on("connection", (socket)=>{

    // socket.on('message',(data)=>{
    //     socket.broadcast.emit('new-message', data);
    // })

    // In your server code
socket.on('message',({room, msg, username})=>{
    socket.to(room).emit('new-message', {msg, username});
});

socket.on('join-room',(room, username)=>{
    socket.join(room);
    socket.to(room).emit('user-joined', {username});
});


    socket.on("disconnect", ()=>{
        console.log("Dissconnected from server");
    })

})

server.listen(3000,()=>{
    console.log("Listening");
})