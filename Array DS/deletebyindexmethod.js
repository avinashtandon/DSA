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
    deletebyindex(index){
        const ele = this.data[index]; // Retrieves the element located at the specified index in the data object.
        for(let i=index; i<this.length-1; i++){
            this.data[i] = this.data[i+1]
        }
        delete this.data[this.length-1];
        this.length--;
        return ele;
    }
}

const mynewarry = new MyArry(); // Creates a new instance of 'MyArry'
mynewarry.push("apple"); // Adds the string "apple" to 'mynewarry'
mynewarry.push("orange");
mynewarry.push("basket");
mynewarry.push("mangoes");
mynewarry.push("trees");

console.log(mynewarry);
console.log(mynewarry.deletebyindex(2));
console.log(mynewarry);