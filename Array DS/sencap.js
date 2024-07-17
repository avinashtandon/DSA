
//sentence caps.

// 1. Make the string lowercase
// 2. Convert string to array
// 3. Capitalize each word
// 4. Convert array back to string

const semtcap=(str)=>{
    return str.toLowerCase().split(' ').map(word => word[0].toUpperCase() + word.slice(1)).join("")
}
    
    

    
console.log(semtcap("HELLO"))