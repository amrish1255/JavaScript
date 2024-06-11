// // oppsLiteral

const user = {
  name: "hitesh",
  email: "hitesh@gmail.com",
  age: 14,
  userDetail: function () {
    console.log(`userName:${this.name}`);
  },
};
// console.log(user.userDetail());

// console.log();

// // new keyword provide a instance to the objects

function fun(userName, email, password) {
  this.userName = userName;
  this.email = email;
  this.password = password;
  this.userDetail = function () {
    console.log(`welcome to my code our chai ${this.userName}`);
  };
  return this;
}

const one = new fun("hitesh", "hitesh@example.com", 56696);
const Two = new fun("herry", "herry@example.com", 7408940034);
// console.log(one.userDetail());
// console.log(Two);

function car(carName, model, price) {
  this.carName = carName;
  this.model = model;
  this.price = price;
  this.carDetail = function () {
    latestCar = {
      latestCarName: "Hundai_550",
      model: 452,
      price: `RS:` + 45225,
    };
  };
  return this;
}
const mehandra = new car("hehandraXUV", 100, "RS:" + 12000); // parameter passed in car function
// of mehandra
const Hundai = new car("Hundai", 142, "RS:" + 14000);

console.log(mehandra.carDetail());

console.log(car().latestCar.latestCarName);
