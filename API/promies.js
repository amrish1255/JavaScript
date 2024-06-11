//promises => it allow to associate handle with asyncronic task until
// the result value sucess /reject

// promises create

const promisOne = new Promise(function (resolve, reject) {
  setTimeout(function () {
    console.log("Asynic task complete");
    resolve();
  }, 1000);
});

promisOne.then(function () {
  console.log("promise complete");
});

// promisesTwo => second method to create the promise

new Promise(function (resolve, reject) {
  setTimeout(function () {
    console.log("Asynic task2");
    resolve();
  }, 1000);
}).then(function () {
  console.log("task2 complete");
});

// promiseThree;
// data come from any other url

new Promise(function (resolve, reject) {
  setTimeout(function () {
    resolve({ name: "herry", email: "hari@example.com", age: 15 }); // parameter passed in reslove
  }, 1000);
}).then(function (user) {
  console.log(user);
});

// promisFour
// use of resolve and rejected

new Promise(function (resolve, reject) {
  setTimeout(() => {
    const error = false;
    if (!error) {
      resolve({ name: "hitesh", email: "hitesh@example.com", age: 14 });
    } else {
      reject("ERROR");
    }
  }, 1000);
})
  .then((userName) => {
    return userName.name;
  })
  .then(function (userName) {
    console.log(userName);
  })
  .catch(function () {
    console.log("Error");
  })
  .finally(() => console.log("your data is sucessfully complete"));

// promiseFive

// Async wait
// const data = new Promise(function (resolve, reject) {
//   setTimeout(() => {
//     const error = false;
//     if (!error) {
//       resolve({ name: "himanshu", email: "himanshuh@example.com", age: 14 });
//     } else {
//       reject("ERROR");
//     }
//   }, 1000);
// });
async function getAllUser() {
  try {
    const response = await fetch(
      "https://api.github.com/users/hiteshchoudhary"
    );
    const data = await response.json();

    console.log(data);
  } catch (error) {
    console.log(error);
  }
}
getAllUser();
