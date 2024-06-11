// let name = "hiteshchoudhary";
// // console.log(name.charAt(5));

// let sub = name.substring(0, 4);
// console.log(sub);

// const url = "http://google%20.com";
// const url2 = url.replace("%", "@gmail");
// console.log(url2);
function collectionCartPrice(...num1) {
  return num1;
}

// spreed operator
const num1 = [1, 2, 3, 4];
const num2 = [5, 6, 7, 8];

console.log(...num1, ...num2);

const obj = {
  name: "hitesh",
  age: 45,
};

function user(detail) {
  console.log(`name is ${detail.name} and age is ${detail.age}`);
}

user(obj);
