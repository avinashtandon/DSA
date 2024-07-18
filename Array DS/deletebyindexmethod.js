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
    deleteByIndex(index){
        const ele = this.data[index]; // Retrieves the element located at the specified index in the data object.
        for(let i=index; i<this.length-1; i++){
            this.data[i] = this.data[i+1]
        }
        delete this.data[this.length -1];
        this.length--;
        return ele;
    }
}

const myNewArray = new MyArry(); // Creates a new instance of 'MyArry'
myNewArray.push("apple"); // Adds the string "apple" to 'myNewArray'
myNewArray.push("orange");
myNewArray.push("basket");
myNewArray.push("mangoes");
myNewArray.push("trees");

console.log(myNewArray);
console.log(myNewArray.deleteByIndex(2));
console.log(myNewArray);