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
        for(let i=0; i<this.length -1; i++){
            this.data[i] = this.data[i++]
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

