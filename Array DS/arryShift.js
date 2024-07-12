class MyArry {
    constructor() {
        this.length = 0;
        this.data = {};
    }

    push(item) {
        this.data[this.length] = item; // Assigns 'item' to the next available index in 'data'
        this.length++; // Increases the 'length' of the array
        return this.length; // Returns the new length of the array
    }
    
    shift() {
        const firstele = this.data[0]; // Stores the first element in 'firstele'
        //what if we don't use loop
        // If you don't use the loop to shift elements to the left after removing the first element, the array-like structure will become inconsistent and have a "hole" at the beginning. Let's see what happens if we omit the loop and just delete the first element:
        // Problems without loop
        // "Hole" in the Array:

//The index 0 is missing, which breaks the array-like structure. This could cause issues when you try to access elements sequentially.
//Incorrect Indexing:

//Accessing elements by index will be incorrect. For example, mynewarry.data[0] will be undefined, and mynewarry.data[1] will be "orange" instead of the expected first element.
//Length Mismatch:

//The length property is decremented, but the actual number of elements in data hasn't been shifted properly, leading to potential confusion.
//Conclusion
//Using the loop to shift elements is essential to maintain the correct array structure. It ensures that after removing the first element, all subsequent elements are properly moved one position to the left, preserving the array's integrity.//
        for(let i=0; i<this.length -1; i++){
            this.data[i] = this.data[i++] // Shift each element one position to the left
        }
        delete this.data[this.length -1]; // Delete the last element
        this.length--; // Decreases the 'length' of the array
        return firstele; // Returns the removed first element

    }
}

const mynewarry = new MyArry(); // Creates a new instance of 'MyArry'
mynewarry.push("apple"); // Adds the string "apple" to 'mynewarry'
mynewarry.push("orange");
mynewarry.push("basket");
mynewarry.push("mangoes");
mynewarry.push("trees");
console.log(mynewarry);
console.log(mynewarry.shift());
console.log(mynewarry);

