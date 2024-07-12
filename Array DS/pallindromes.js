// Palindromes
//If the reverse string is equal to the original
//one then that word is a palindrome
// for ex. abba = abba
// ahhha = ahhha
//not like ->    world - dlrow
const pallin=(str)=>str.split("").reverse().join("") ===str;
console.log(pallin("ahha"))