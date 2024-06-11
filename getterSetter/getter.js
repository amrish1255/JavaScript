// /* ++++++++++++++++++++++ getter use in class to private the data ++++++++++++++++++++++++++++++++ */

class user {
  constructor(email, password) {
    this.email = email;
    this.password = password;
  }

  get password() {
    // gettter is used to access the value out of class
    return this._password.toUpperCase();
  }
  set password(value) {
    this._password = "Sorry you can't access the password our this account";
  }
  get email() {
    return this._email.toUpperCase();
  }
  set email(email) {
    this._email = "hitesg@google.com";
  }
}

const users = new user("hit@example.com", "4455");

console.log(users.password);
console.log(users.email);

/* ++++++++++++++++++++++++++++ getter use in function +++++++++++++++++++++++++++++++ */

function userId(name, email) {
  this._name = name;
  this._email = email;

  Object.defineProperty(this, "name", {
    get: function () {
      return this._name.toUpperCase();
    },
    set: function (value) {
      this._name = "himanshu";
    },
  });
  Object.defineProperty(this, "email", {
    get: function () {
      return this._email.toUpperCase();
    },
    set: function (vaue) {
      this._email = "hello@gmail.com";
    },
  });
}

const userDetail = new userId("samuelKumar", "samuel@google.com");

console.log(userDetail.name);
console.log(userDetail.email);

/* +++++++++++++++++++++++++++++++++++++++++++++ Object _get_Set.js ++++++++++++++++++++++++++++++++++++++++++++++*/

const obj2 = {
  _email: "hit@gmail.com",
  _password: "MXPQ4YGTQ4",

  // get method
  get email() {
    return this._email.toUpperCase();
  },
  // setter
  set email(value) {
    this._email = value;
  },

  // get for pasword
  get password() {
    return this._password.toUpperCase();
  },
  // set the pasword

  set password(value) {
    this._password = value;
  },
};

const jani = Object.create(obj2);
console.log(obj2.email);
console.log(obj2.password);
