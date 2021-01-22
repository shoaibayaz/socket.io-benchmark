const io = require('socket.io-client');

const message = "Testing Message";

function user(host, port) {
    const socket = io.connect('http://' + host + ':' + port, {
        'forceNew': true,
        'transports': ['websocket']
    });

    socket.on('connect', function() {

        // Start messaging loop
        socket.emit('broadcast', message);

        socket.on('broadcastOk', function() {
            socket.emit('broadcast', message);
        });
    });
};


const users = 100000;
const newUserTimeout = 500;
const host = 'localhost';
const port = '3000';

for (let i = 0; i < users; i++) {
    setTimeout(() => {
        user(host, port);
    }, newUserTimeout);
};