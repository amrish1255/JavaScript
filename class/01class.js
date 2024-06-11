// class user {
//   constructor(userName, email, password) {
//     this.userName = userName;
//     this.email = email;
//     this.password = password;
//   }
//   encryptPassword() {
//     return `${this.password}abc`;
//   }
//   changeName() {
//     console.log((this.userName = "hiteshChoudhary"));
//   }
// }

// const userDetail = new user("hitesh", "hitesh@example.com", 123);
// console.log(userDetail.email);

// console.log(userDetail.encryptPassword());
// userDetail.changeName();

//other method

function user(userName, password, email) {
  this.userName = userName;
  this.password = password;
  this.email = email;
}

user.prototype.changePassword = function () {
  console.log(`${this.password}45255`);
};

const Detail = new user("himanshu", 455, "hi@google.com");
Detail.changePassword();
