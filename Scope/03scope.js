// ++++++++++++++++++++++++Scope Level and mini hosting +++++++++++++++++++++++

/* +++++++++ in function */
function user() {
  const name = "hitesh";
  function userName() {
    const otherName = "Himanshu";
    console.log(name);
  }

  //userName();
  //console.log(otherName);
  console.log(name);
}
// user();

// global variable can access in local scope but local variable can't access in global scope

/*    +++++++ In conditional statement ++++++++ */
const name = "hitesh";
if (true) {
  //console.log(name);
}

function add(num) {
  return num + 1;
}

console.log(addTwo(5)); // in this case variable can't access befor initillization
const addTwo = function (num) {
  return num + 2;
};
