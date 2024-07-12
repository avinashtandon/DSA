//1234 -> 4321
const intreversal=(n)=>{
       const reve = n.toString().split("").reverse().join("")
       return parseInt(reve);
}
console.log(intreversal(123));
console.log(typeof intreversal(12345))


//n.toString():

//Converts the number n to a string.
//Example: 123.toString() results in "123".
//.split(""):

//Splits the string into an array of individual characters.
//Example: "123".split("") results in ["1", "2", "3"].
//.reverse():

//Reverses the order of elements in the array.
//Example: ["1", "2", "3"].reverse() results in ["3", "2", "1"].
//.join(""):

//Joins the elements of the array back into a single string.
//Example: ["3", "2", "1"].join("") results in "321".
//parseInt(reve):

//Converts the reversed string back to an integer.
//Example: parseInt("321") results in 321.//

const rever=(n)=>{
      const renum = n.toString().split("").reverse().join("");
      return parseInt(renum);
}

console.log(rever(6476));