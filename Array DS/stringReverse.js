// String Reversal
// convert HELLO TO OLLEH
const reversestring =(str)=> str.split("").reverse().join("");


//The reversestring function is called with the argument "HELLO".
//The function returns the reversed string "OLLEH".
//console.log prints "OLLEH" to the console.

console.log(reversestring("HELLO"))


//Purpose: Converts the string into an array of individual characters.
//Explanation:
//The split method is called on the string str with an empty string "" as the separator.
//This splits the string at every character, resulting in an array of characters.
//For example, "HELLO".split("") returns ["H", "E", "L", "L", "O"].


//Purpose: Reverses the order of elements in the array.
//Explanation:
//The reverse method is called on the array returned by split.
//This method reverses the order of the elements in the array.
//For example, ["H", "E", "L", "L", "O"].reverse() returns ["O", "L", "L", "E", "H"].

//Purpose: Combines the elements of the array back into a single string.
//Explanation:
//The join method is called on the reversed array with an empty string "" as the separator.
//This method concatenates all the elements of the array into a single string, with no characters in between.
//For example, ["O", "L", "L", "E", "H"].join("") returns "OLLEH".









const stringreversal=(str)=>str.split("").reverse().join("");
console.log(stringreversal("avinash"));
//const stringreversal=(str)=>str.split("").reverse("").join("");
