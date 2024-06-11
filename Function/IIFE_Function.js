/*  IIFE => Immediate Invoked Function Expression  => used to privent the pollution of code */
(function chai() {
  console.log("niceTea");
})();

((code) => {
  console.log(`CodeOurChai  ${code}`);
})("hitesh");

const myArr = [1, 2, 3, 4, 5];
console.log(myArr.forEach());
