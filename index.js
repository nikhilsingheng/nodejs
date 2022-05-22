// console.log("xnwqn");
// var a = 10;
// var b = 40;
// console.log(a + b);
// const app = require("./app");
// console.log(app.z());
// var x = 20;
// if (x === 20) {
//   console.log("matchet");
// }
// for (var x = 0; x < 10; x++) {
//   console.log(x);
// }

// const arr = [7, 9, 5, 4, 7, 0, 9];
// let result = arr.filter((item) => {
//   return item > 4;
// });
// console.log(result);
// const color = require("colors");
// console.log("hello".red);
// console.log("hello".green);
// console.log("hello".blue);

const http = require("http");
const data = require("./data");
http
  .createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "application/json" });
    res.write(JSON.stringify(data));
    res.end();
  })
  .listen(5000);
