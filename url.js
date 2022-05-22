const http = require("http");

function dataController(req, res) {
  res.write("hello world");
  res.end();
}

http.createServer(dataController).listen(4500);
http
  .createServer((req, res) => {
    // res.write("hello world");
    // res.end();
  })
  .listen(4500);
