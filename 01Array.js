/*Arrray => collection of multiple element in single variable;*/

const arr = [1, 2, 3, 4, 5, 6];
// console.log(arr);

// Method

arr.push(8); // push => add element in rear
arr.pop(); // pop => remove element from rear

arr.unshift(21); //unshift() => add element in start index
arr.shift(); // shift(()) => remove the element from front

// join() => used to join the element and after join the element change their type into string

const newArr = new Array(arr);
console.log(newArr.join());

arr.slice(1, 3); // slice() => last element left where you define their range
arr.splice(1, 5);

console.log(arr.includes(5)); // include => use to search the element in booleamform
console.log(arr.indexOf(2));

console.log(arr); // splice()=> start element left in  renge defined
