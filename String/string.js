const name = "hiteshChoudhatry";
const repoCount = 50;

// concate the two string

// console.log(name + repoCount); //this method not use in industry

/*use backtick */
console.log(`name ${name} and repo count  is  ${repoCount}`); // string interpolation concept used to concatinate the two string

const gameName = "hitesh_sir";
const gameOver = "PUB_G";

/*length */
console.log(gameName.length); // length use for find the length of string
/*touppercase use() */
console.log(gameName.toUpperCase()); // toUpperCase()=> use to conver the string small into Captial.
/*toLowertCase() */
console.log(gameOver.toLowerCase()); // toLowerCase() => use to convert the captial to small.
/*charAt() */
console.log(gameName.charAt(5)); // charAt => use for find the character at index
/*indexOf (" ") */
console.log(gameName.indexOf("s")); // indexOf => use for find the index number of character

// substring
const newString = gameName.substring(0, 4); // not -ve value support in substring
console.log(newString);

// use of  slice
const anotherString = gameName.slice(-8, 5); // -ve value accept in slice mathod

// use of trim
const newString_one = "    hitesh   ";
console.log(newString_one);
console.log(newString_one.trim()); // trim use for remove the extra space

// use of replace

const url = "http://hitesh.com/hitesh%20Choudhary";
console.log(url);

const repUrl = url.replace("%20", "_");
console.log(repUrl);
