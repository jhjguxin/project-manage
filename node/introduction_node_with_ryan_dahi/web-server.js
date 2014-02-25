var http = require('http');

var s = http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.write('hello\n');
  setTimeout(function() {
    res.end("world\n");
  }, 2000
  );
  console.log("finished");
})

s.listen(8000, '127.0.0.1');

console.log('Server running at http://127.0.0.1:8000/');



/*
The program 'ab' is currently not installed. You can install it by typing:
sudo apt-get install apache2-utils

ab -n 100 -c 100 http://127.0.0.1:8000/
This is ApacheBench, Version 2.3 <$Revision: 1430300 $>
Copyright 1996 Adam Twiss, Zeus Technology Ltd, http://www.zeustech.net/
Licensed to The Apache Software Foundation, http://www.apache.org/

Benchmarking 127.0.0.1 (be patient).....done


Server Software:        
Server Hostname:        127.0.0.1
Server Port:            8000

Document Path:          /
Document Length:        12 bytes

Concurrency Level:      100
Time taken for tests:   2.036 seconds
Complete requests:      100
Failed requests:        0
Write errors:           0
Total transferred:      11300 bytes
HTML transferred:       1200 bytes
Requests per second:    49.13 [#/sec] (mean)
Time per request:       2035.551 [ms] (mean)
Time per request:       20.356 [ms] (mean, across all concurrent requests)
Transfer rate:          5.42 [Kbytes/sec] received

Connection Times (ms)
              min  mean[+/-sd] median   max
Connect:        2    3   0.5      3       6
Processing:  2015 2024   4.2   2026    2028
Waiting:       12   20   4.1     20      26
Total:       2018 2027   3.8   2029    2030

Percentage of the requests served within a certain time (ms)
  50%   2029
  66%   2029
  75%   2029
  80%   2029
  90%   2030
  95%   2030
  98%   2030
  99%   2030
 100%   2030 (longest request)

*/

