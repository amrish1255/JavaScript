function setuserName(userName) {
  this.userName = userName;
}

function user(userName, email, password) {
  setuserName.call(this, userName); // call => it passed the current execution to another functions
  this.email = email;
  this.password = password;
}

const userDetal = new user("hitesh", "hitesh@example.com", 14522502);

console.log(userDetal);
