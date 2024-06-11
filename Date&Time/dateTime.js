// for duplicate the text in vs code use shif + alt + upArrrow

let myDate = new Date();
//console.log(typeof myDate);
// console.log(myDate.toString);
//console.log(myDate.toDateString());

//console.log(myDate.toLocaleDateString()); // use to seprate the D,M,Y by comma

// let createdDate = new Date(2003, 0, 8, 5, 3);
// let creatDate = new Date("2003-01-08"); // new method for create the date and time
//console.log(creatDate.toLocaleString());
//console.log(createdDate.toLocaleDateString()); // o/p => 1/8/2003
// console.log(createdDate.toLocaleString()); // o/p => 1/8/2003, 5:03:00 AM

// time stamp
let newTimeStamp = new Date();
// console.log(newTimeStamp.getDate());
// console.log(newTimeStamp.getMonth());
// console.log(newTimeStamp.getHours());
// console.log(newTimeStamp.getSeconds());

let updateTime = newTimeStamp.toLocaleString("default", {
  weekday: "long",
});
console.log(updateTime);
