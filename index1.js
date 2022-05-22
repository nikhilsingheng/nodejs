// console.log(process.argv[3]);

// const fs = require("fs");
// fs.writeFileSync("apple.txt", "this 9is apple");
// const input = process.argv;
// if (input[2] == "add") {
//   fs.writeFileSync(input[3], input[4]);
// } else if (input[2] == "remove") {
//   fs.unlinkSync(input[3]);
// } else {
//   console.error("Invalid");
// }
const fs = require("fs");
const path = require("path");
const dirPath = path.join(__dirname, "files");

console.warn(dirPath);

// for (i = 0; i < 5; i++) {
//   fs.writeFileSync(dirPath + `/type${i}.txt`, "a simple file");
// }
fs.readdir(dirPath, (error, files) => {
  //   console.warn(files);
  files.forEach((item) => {
    console.log(item);
  });
});
