/* +++++++++++++++++++++++++++++++ new Keyword ++++++++++++++++++++++++ */

function userDetail(Tea, price) {
  this.Tea = Tea;
  this.price = price;
}

userDetail.prototype.increase = function () {
  this.score++;
};

userDetail.prototype.tea = function () {
  console.log(`tea price is ${this.price}`);
};

const user1 = new userDetail("chai", 125);
const user2 = new userDetail("coffie", 45);
user1.tea();

/*  +++++++++++++++++++++++++  Prototype in javaScript ++++++++++++++++++++++ */

//let names = "hitesh      ";
let userName1 = "hit        ";
//console.log(userName1.length);
//console.log(userName1.trim().length);

String.prototype.change = function () {
  console.log(names.trim().length);
};

let arr = ["spidernam", "thor"];

const user = {
  name: "Ramu",
  email: "hitesh@example.com",
  age: 15,

  allUser: function () {
    console.log(`${this.email}`);
  },
};

Object.prototype.hitesh = function () {
  console.log(` hitesh make a method that acuire the property of user`);
};

// Inheritance => means to accure the property of other

const teacher = {
  vedioCreate: true,
};
const teachingSupport = {
  isAvailable: false,
};

const TA_Support = {
  makingAssignment: "jsAssignment",
  fullTime: true,
  __proto__: teachingSupport,
};

console.log(TA_Support.isAvailable);
// (kis me karna hai(teacher) kiska karna hai(User))
teacher.__proto__ = user;

console.log(teacher.email);

// ModernSyntex

Object.setPrototypeOf(teachingSupport, user);

const name = "hitesh     ";

const samuel = "samu         ";

String.prototype.truelength = function () {
  console.log(`trueLength_is ${this.trim().length}`);
};

// array

const array = [1, 2, 3, 4, 5, 6, 7, 8];
const beasts = ["ant", "bison", "camel", "duck", "bison"];
