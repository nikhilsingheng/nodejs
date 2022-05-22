const fs = require("fs");
const path = require("path");
const dirPath = path.join(__dirname, "curd");
const filePath = `${dirPath}/app.text`;
// fs.writeFileSync(filePath, "this is daa method");
// fs.readFile(filePath, "utf-8", (err, item) => {
//   console.log(item);
// });

// fs.appendFile(filePath, "and file name is ss.txt", (err) => {
//   if (!err) {
//     console.log("file is update" );
//   }
// });

fs.rename(filePath, `${dirPath}/ff.txt`, (err) => {
  if (!err) {
    console.log("rename");
  }
});
