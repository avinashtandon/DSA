// Indicates that the algorithm's execution time grows quadratically with the size of the input data(represented by n)



// finding pairs

const numbers = [1,2,3,4,5,6];
const findingp =(arr)=>{
    for(let i=0; i<numbers.length; i++){
        for(j=0; j<numbers.length; j++){
            console.log(`pairs: ${arr[i]} ${arr[j]}`)
        }
    }
}
findingp(numbers)






// This technique is useful for tasks that require comparing or pairing elements within an array.