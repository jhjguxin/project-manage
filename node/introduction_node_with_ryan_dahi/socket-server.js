var net = require('net')

var server = net.createServer(function(socket) {
  socket.write("hello\n");
  //socket.end("world\n");
  socket.write("world\n");

  socket.on('data', function (data){
    socket.write(data);
  });
}
);

server.listen(8000)


/*

$ nc 127.0.0.1 8000
hello
world
$ telnet 127.0.0.1 8000
Trying 127.0.0.1...
Connected to 127.0.0.1.
Escape character is '^]'.
hello
world
Connection closed by foreign host
*/

