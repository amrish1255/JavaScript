const discriptor = Object.getOwnPropertyDescriptor(Math, "PI");
console.log(discriptor);

const chai = {
  name: "tea",
  price: 45,
  about: function () {
    console.log("chai our code");
  },
};
console.log(Object.getOwnPropertyDescriptor(chai, "name"));

// hide the name in object

Object.defineProperty(chai, "name", {
  writable: true,
  enumerable: true, // enumerable karne se object ki property loop ka part hi nhi ban_ta
});

console.log(Object.getOwnPropertyDescriptor(chai, "name"));

// for of loop
for (const [key, value] of Object.entries(chai)) {
  if (typeof value !== "function") {
    console.log(`${key}: ${value}`);
  }
}
