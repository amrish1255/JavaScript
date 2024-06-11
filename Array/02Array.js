const letter = ["A", "B", "C", "D"];
const newLatter = ["D", "E", "F", "G"];

// letter.push(newLatteer);
// console.log(typeof letter);

// concatinate => add the two array
const con = letter.concat(newLatter);
console.log(con);
// spread(...variable name .....variablename) means element distribute //kach ki glass ko hand se chod dene

const herous = ["marble"];
const subHerous = ["spiderman"];
const otherHerous = ["Thor"];

const newHerous = [...herous, ...subHerous, ...otherHerous];
console.log(newHerous);

// flate => multiple array convert  into a single array

const otherArray = [1, 2, 3, ["spiderr", "thodr", ["himanshu", ["judjment"]]]];

const newArray = otherArray.flat(Infinity);
console.log(newArray);
// isArray => to check array is array or not
const newName = "hitesh";
const check = Array.isArray(newName);

console.log(check);

// screaping => data ko extract karna

console.log(Array.from(newName));
console.log(
  Array.isArray({
    name: "hitesh",
  })
);

let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1, score2, score3));
