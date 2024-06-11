/* constructor or singulton */

// constructor

// const tenderUser = new Object();

const tenderUser = {};

tenderUser.name = "hitesh";
tenderUser.age = 45;
tenderUser.email = "hitesh@gmail.com";
tenderUser.location = "Lucknow";

// console.log(tenderUser);

const tenderUsers = {
  name: "hari",
  User: {
    userdetail: {
      newUser: {
        name: "raghav",
        age: 12,
        email: "raghav@gmail.com",
        location: "Hydrabad",
      },
    },
  },
};
//console.log(tenderUsers.User.userdetail.newUser);

// Merg of object

const obj1 = { a: 1 };
const obj2 = { b: 2 };
const obj3 = { c: 3 };

// use assign() method

const obj4 = Object.assign({}, obj1, obj2, obj3);
// console.log(obj4);

const obj5 = { ...obj1, ...obj2, ...obj3 }; // spreed operator
console.log(obj5);

// object inside the array

const arr = [
  {
    id: 1,
    email: "hitesh@gmail.com",
  },
  {
    id: 2,
    email: "himanshu@gmail.com",
  },
  {
    id: 3,
    email: "raghav@gmail.com",
  },
];
console.log(arr[1]);

console.log(Object.keys(arr));
console.log(Object.values(arr));

// console.log(object.enteries(arr));

console.log(tenderUsers.hasOwnProperty("isLoggedIn")); // used to check the key in data base avaliable are not
