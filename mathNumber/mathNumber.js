const score = 100;
//console.log(score);

const anotherScore = new Number(100);
//console.log(typeof anotherScore.toString()); // number to string convert use tostring property

const balance = new Number(500);
//console.log(balance.toString().length);

/*toFixed() */

//console.log(balance.toFixed(2)); // to fixed property used in ecomarceWebsite to show the price ter decimal how much 0 you want to show
// eg => 500.0  or 500.00;

const otherNumber = 500.53622;
//console.log(otherNumber.toPrecision(7)); // toPrecision()=>
//console.log(otherNumber.valueOf()); // valueOf => to show wholeNumber/price
// console.log(otherNumber.toLocaleString());
//console.log(otherNumber.toExponential());
const localNumber = 1000000;

// console.log(localNumber.toLocaleString("en-IN"));

/* **************************** MATH ********************************** */

// console.log(Math.abs(-4)); // abs does not contain -ve value
// console.log(Math.round(4.6)); // aproximate max value contain
// console.log(Math.ceil(4.2)); // min value contain
// console.log(Math.floor(4.2)); // remove decimal number
// console.log(Math.max(1, 2, 3, 4, 5));
// console.log(Math.min(1, 2, 3, 4, 5));
// console.log(Math.fround(5.5)); //  same number print

// const m1 = Math.random() * 10 + 1;

// const min = 10;-
// const max = 20 ;
// console.log(Math.floor(Math.random() * (min - max + 1) + min));
// console.log(Math.random());
// console.log(Math.random() * (max - min + 1));
// console.log(Math.random() * (max - min + 1) + min);

/*Game logic to change the score every time */
const min = 10;
const max = 20;
console.log(Math.floor(Math.random() * (max - min + 1) + min));
