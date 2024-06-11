// object => can be define by tow method
// 1 => literal => in literal object not defined by constructor
// 2 => constructor

// singleton => object defined by constructor

// objectLiteral

let user = {
  name: "hitesh",
  number: 562166226,
  ["othername"]: "HiteshChoudhary",
  email: "hitesh@google.com",
  password: "MXPQ4YGQT4",
};

// console.log(user.email); // data access from the object
console.log(user.email);
console.log(user["number"]);

// use of symbol
const myName = Symbol("herry");

const obj = {
  name: "Radhika",
  age: 45,
  [myName]: "Radha",
};

// console.log(obj);

obj.name = "Ramesh";
// console.log(obj);

// Object.freeze(obj);
obj.name = "Samuel_Kumar";
console.log(obj);

// Greeting function => is also anonimous function

// function treate as a variable

obj.greeting = function () {
  console.log("hello");
};

console.log(obj.greeting());

console.log(user.greetingTwo());
