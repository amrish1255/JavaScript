// function => block of code which can use multiple time in code

// function user() {
//   console.log("hello");
// }

//user(); // =>  user is refrence and ,() => is execute

// sum of two number
function sumOfTwoNumber(number1, number2) {
  return (result = number1 + number2);
}

// console.log("result:", sumOfTwoNumber(4, 3));

// profissional way
function userDetail(user) {
  return `"hello ${user}`;
}

// console.log(userDetail("hitesh"));

function userLoggedIn(name) {
  if (name === undefined) {
    console.log("plese enter the valid data");
    return;
  }
  return "hello hitesh";
  //return `${name}`; //interpolation method
}

console.log(userLoggedIn("hitesh"));
