/*  1=> for of loop
    2=> for in loop
    3=>for each loop
 */
/* +++++++++++++++++++++++++++++++++ for of +++++++++++++++++++++++++++++++++++++ */

const arr = [1, 2, 3, 4, 5]; // this loop can apply on array and String

for (const name of arr) {
  //console.log(name);
}

const str = "hello Himanshu";
for (const String of str) {
  //console.log(`String of str is ${String}`);
}
/* +++++++++++++++++++++++++++++++++++++++++ map ++++++++++++++++++++++++++++++++++ */

// Map
const map = new Map();
map.set("in", "india");
map.set("usa", "united state of america");
map.set("fr", "french");

for (const [key, value] of map) {
  //console.log(key, ":-", value);
}

const name = new Map();
map.set("a", 97);
//console.log(map.get("a"));

//console.log(map.delete("a"));
//console.log(map.size);

// to iterate on object we use for in loop

/* ++++++++++++++++++++++++++++++++++++++++++ for in +++++++++++++++++++++++++++++++++++++++*/
const user = {
  userName: "himanshu",
  email: "himanshu@google.com",
  location: "bengloar",
};
for (const key in user) {
  console.log(`${key}- ${user[key]}`);
}

const str1 = ["apple", "box", "cat", "dog"];
// for (const key in str1) {
//   console.log(str1[key]);
// }

str1.forEach((item, index, arr) => {
  console.log(item, index, arr);
});

// object inside the array
const mobileName = [
  {
    name: "Realme",
    price: 1200,
    brandName: "ramle",
  },
  {
    name: "Samsung",
    price: 1300,
    brandName: "Samsung",
  },
  {
    name: "oppo",
    price: 1300,
    brandName: "oppo",
  },
];

mobileName.forEach((item, index, arr) => {
  //console.log(` ${item.name}  and its brand name is ${item.brandName}`);
  console.log(item, index, arr);
});
