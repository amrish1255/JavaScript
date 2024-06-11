/*  
  memory => stack ( primitive type) & Heap (Non primitive type)


   */

let myFirstName = "hiteshchoudhary";
mySecondName = myFirstName;
console.log(mySecondName);
console.log(myFirstName);

// object
let usrOne = {
  userId: 45,
  userName: "hitesh@google.com",
  userPassword: "MXPQ4YGQT4",
};

let usertwo = {
  userId: 50,
  userName: "hitesh@facboke.com",
  userPassword: "MXPQ5YGQT5",
};

usertwo.userId = 60; // in Heap memoruy original vale changed
console.log(usertwo);
