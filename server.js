 var net =require('net');

 var MOTD = "Welcome to nixopoly server";

 var server = net.createServer(function (socket) {
     socket.write(MOTD);
       socket.pipe(socket);
 });

server.listen(1337, '127.0.0.1');
