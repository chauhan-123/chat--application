let express = require('express')
let app = express();

let http = require('http');

const server = http.createServer(app);
const io = require('socket.io')(server);
io.origins(['*:*']);

const port = process.env.PORT || 3000;



server.listen(port,() => {
    console.log(`started on port: ${port}`);
});

io.on('connection', (socket) => {
    socket.on('new-message', (message) => {
        io.sockets.emit('new-message', message);
    });
});