var http = require('http');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('GABRIEL M. R. BARBOSA 19/09/2023');
}).listen(8015);
