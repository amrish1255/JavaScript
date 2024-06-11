for (let i = 0; i <= 10; i++) {
  const element = i;
  console.log(element);
}

// table print
for (let i = 1; i <= 10; i++) {
  for (let j = 1; j <= 10; j++) {
    const element = i + " * " + j + " = " + i * j;
    console.log(element);
  }
}

// while loop

let price = 1;

while (price < 10) {
  console.log(`your price for chocklet ${price}`);
  price++;
}

// do while loop
let prices = 1;
do {
  console.log("hello");
  prices++;
} while (prices < 10);
