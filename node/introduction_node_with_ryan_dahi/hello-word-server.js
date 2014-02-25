// while true;
// sleep 5
// print 'hello'
//

setInterval(function() {
  console.log("world");
}, 2000);

console.log("hello");


var http = require('http')

setInterval(function() {
  console.log('fetching google.com');

  http.get({host: 'google.com'}, function(res) {
    console.log(res.headers);
  });
}, 2000)


var s = http.Server(function (req, res) {
  res.writeHead(200);
  setTimeout(function() {
    res.end("hello world\n");
  }, 1000);
});

s.listen(8000);

