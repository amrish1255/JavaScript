//map()=
// fillter()=
// reduce()=

// const myUser = user.map((item) => {
//   return item * 10;
// });
// console.log(myUser);

// const numbers = [65, 44, 12, 4];
// const newArr = numbers.map(myFunction);

// function myFunction(num) {
//   return num * 10;
// }
// console.log(newArr);

/* ++++++++++++++++++++++++++  filter( ) method ++++++++++++++++++++++ */

const myData = ["spray", "elite", "exuberant", "dstruction", "prsnt"];
const Data = myData.filter((item) => {
  return item.includes("e", 0);
  return;
});

//console.log(Data);

const book = [
  {
    title: "book One",
    genre: "non-Fiction",
    publish: 1981,

    edition: 1989,
  },
  {
    title: "book two",
    genre: "history",
    publish: 1982,

    edition: 1984,
  },
  {
    title: "book three",
    genre: "history",
    publish: 1985,

    edition: 1980,
  },
  {
    title: "book four",
    genre: "Science",
    publish: 1989,

    edition: 1987,
  },
];

const bookDetail = book.filter(
  (item) => item.genre === "history" && item.edition > 1980
);

console.log(bookDetail);
/* ++++++++++++++++++++++++++++ reduce() method +++++++++++++++++++++++ */

const userId = [1, 2, 3, 4];
// const user = userId.reduce((acc, currvalue) => {
//   console.log(`acc${acc} and curValue ${currvalue}`);
//   return acc + currvalue;
// }, 0);

// console.log(user);

// without scope

const user = userId.reduce((acc, curValue) => acc + curValue, 0);
console.log(user);
