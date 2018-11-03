
//allows it access internet
const http = require('http');
//allows to access to hardrive, reading and writting files
const fs = require('fs');
//creates serever on the internet
http.createServer(function (req, res) {
  fs.readFile('demofile.html', function(err, data) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);
    res.end();
  });
  // listen on port 4444
}).listen(4444);
