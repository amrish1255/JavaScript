//... spred operator => used to make the iteratible on  which loop can applied eg : array string object

function collectionCartPrice(...num1) {
  return num1;
}

const num1=[1,2,3,4];
const num2=[5,6,7,8]
console.log(...num1,...num2);

//console.log(collectionCartPrice(10, 20, 30));

// Object passed in function
const userCart = {
  name: "reword",
  price: 45,
};

const userReword = {
  name: "amazonReword",
  price: 45,
};
function userCarts(reword) {
  return `your ${reword.name} is shopping and its price is ${reword.price}`;
}

// console.log(userCarts(userReword));

const user = {
  name: "hitesh",
  age: 45,
  location: "hydrabad",
};

function userDetail(named) {
  return `name is ${named.name} and age is  ${named.age} `;
}

console.log(userDetail(user));
