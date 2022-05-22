let a = 10;
let b = 0;
// console.log("cw wlwele;l");

let waitingData = new promise((resolve, reject) => {
  setTimeout(() => {
    //   console.log("nikhil");

    resolve(30);
  }, 3000);
});
waitingData.then((data) => {
  b = data;
  console.log(a + b);
});
