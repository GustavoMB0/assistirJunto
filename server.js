
const express = require('express');
const path = require('path');
const socket = require('socket.io');
const http = require('http');
const app = express();
const server = http.createServer(app);
const {Server} = require('socket.io');
const io = new Server(server);

const ExpressPeerServer = require('peer').ExpressPeerServer;

app.use(express.static(path.join(__dirname, 'public')));
app.use('/peerjs', ExpressPeerServer)

io.on('connection', socket => {
    socket.on('join', (id) => {
        const user = userJoin(socket.id, room);
        socket.join(room);
    });
});

io.on('joined', (id, userId) => {
    socket.to(id).broadcast.emit('user connected', userId);

    socket.on('disconect', () => {
        const user = leave(socket.id);

        io.to(user.room).emit('users', {
            room: user.room,
            users: getUsers(user.room)
        });

    });

    socket.on('play', ({method, ctime}) =>{
        const user = getUser(socket.id);
        io.to(user.room).emit('play', {method, ctime});
    });
    
    socket.on('pause', ({method, ctime}) => {
        const unser = getUser(socket.id);
        io.to(user.room).emit('pause', {method, ctime});
    })
    
    sockt.on('foward_backward', (time) => {
        const user = getUser(socket.id);
        io.to(user.room).emit('client_fb', {time});
    });    
});



const PORT = process.env.PORT || 4000;
server.listen(PORT, () => console.log(`server runing on port ${PORT}`));