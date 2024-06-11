// local and Global scope

let a = 200;
if (true) {
  let a = 45;
  const b = 56;
  var c = 20;
  console.log("INNER :", a);
}
console.log(a);
// console.log(b);
console.log(c);
