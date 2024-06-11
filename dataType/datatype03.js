// Data type summary

/* 1=> primitive datatype  (call by value => original address of data not share only copy address share and changed reflect in copy address )


        string 
        Number 
        boolean => true/false
        null => empty
        undefined => undefined  
        symbole
        Bigint => large value



       2=> Non primitive datatype (call by refrence )

            Array
            Object
            Function





       primitive  and Non primitive data type is classified on the basis of How the data store in memory and how it is access from the memory


     */

const id = 55; // Number
const userId = 4522633336366662255n; /* bigInt */
let email_Id; // undefined
let Id = Symbol("552");
let anotherId = Symbol("526");

console.log(Id === anotherId);

// Array create
let food_Item = ["Rice", "wheat", "vegitable", "mustord_oil", "salt"];
console.table(food_Item);

// function store in variable
let stingFunction = function () {
  console.log("hello World");
};

// object
let myObj = {
  myAge: 45,
  myName: "hitesh",
  myUserId: "hitesh@0.1",
  contactAddress: 4525523655,
};

console.log(myObj);
