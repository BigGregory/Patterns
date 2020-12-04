// const promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve('foo');
//   }, 3000);
// });

const promise = new Promise((resolve, reject) => {
  resolve(500);
});

promise.then((result) => console.log(result));
console.log('console log 2');
