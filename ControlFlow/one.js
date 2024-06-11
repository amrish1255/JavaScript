// conditional Statement
// use of if
let userId = true;
if (userId) {
  console.log("hello");
}

// use of  if else , else if
let item = 45;
if (item < 12) {
  console.log("sorry i cant buy");
} else if (item < 60) {
  console.log(" i can buy");
} else {
  console.log("plese fill your  item");
}

// && operator
const userLoggedIn = true;
const userDebitCard = true;
if (userLoggedIn && userDebitCard) {
  console.log("logged_In");
} else {
  console.log("plese loggedIn");
}

// or operator (||)

const userName = "rames";
const userNumber = 1;
if (userName == "ramesh" || userNumber == 1) {
  console.log("hey ramesh");
} else {
  console.log("sorry");
}

// switch case
const month = "march";

switch (month) {
  case "jan":
    console.log("january");

    break;
  case "feb":
    console.log("feburary");

    break;
  case "march":
    console.log("march");

    break;

  default:
    console.log("invalidMonth");
    break;
}

// truthy value and falshy value

// truthyValue => "0","false", " ",[],{} , function(){}

// falshyValue => 0,false,-0,bigInt ,On, "", null, undefined

const tr = {};
const arr = [1, 23, 4, 5];
if (arr.length == 0) {
  console.log("true");
} else {
  console.log("false");
}

const empObject = {};
if (Object.keys(empObject.length == 0)) {
  console.log("enterYourUserName");
} else {
}

// Nullish Coalescaing operator (??) : null undefined

let var1 = 10;
//var1: 10 ?? 20;
var1 = null ?? 10;
//var1 = 20 ?? 30 ?? 40;
console.log(var1);

// Ternury_Operator

// condition ? true : false;
let itemPrice = 20;
itemPrice < 25 ? console.log("buy") : console.log("not buy");
