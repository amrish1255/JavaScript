// const user = {
//   name: "hitesh",
//   price: 45,
//   welcomeMsg: function () {
//     //console.log(`${this.name},"How are you"`);
//     //console.log(this);
//   },
// };

// // console.log(user.welcomeMsg());
// user.welcomeMsg();
// user.name = "hiteshChoudhary";

// user.welcomeMsg();

// // ArrowFunction

// const name = (num1, num2) => {
//   return num1 + num2;
// };

// // const na = name(4, 5);

// function userName() {
//   console.log(this);
// }
// // userName();

// //console.log(this); // it does not acces the object because in globalScope no any object is present

// /*  +++++++++++++++++++++++++++++ Arrow_Function ++++++++++++++++++++++++++++++++ */

// // 1=> method
// // const add = (num1, num2) => {
// //   return num1 + num2;
// // };

// // console.log(chai(4, 6));

// // 2nd method
const addTwo = (num1, num2) => num1 + num2;

// Object return in arrow function
const obj = (obj1, obj2) => ({ name: "hitesh" });

console.log(addTwo(2, 6));
//console.log(obj());

const user = () => ({
  username: "hitesh",
  email: "hitesh@gmail.com",
  location: "benglor",
  detail: () => console.log(username),
});

console.log(user());
