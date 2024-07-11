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
}

const mynewarry = new MyArry(); // Creates a new instance of 'MyArry'
mynewarry.push("apple"); // Adds the string "apple" to 'mynewarry'
mynewarry.push("orange");
mynewarry.push("basket");
mynewarry.push("mangoes");
mynewarry.push("trees");


console.log(mynewarry);


// Step-by-Step Explanation:
//Class Declaration (MyArry):
//class MyArry { ... }: Defines a class named MyArry.

//constructor() { ... }: The constructor method initializes the properties of each instance created from MyArry.

//Inside the constructor:

//this.length = 0;: Initializes an instance property length to 0. This will track the number of elements in the array.
//this.data = {};: Initializes an instance property data as an empty object {}. This will store the elements of the array.
//push() Method:
//push(item) { ... }: Defines a method named push for the MyArry class. The push method:
//Takes one parameter item, which represents the element to be added to the array.
//this.data[this.length] = item;: Stores the item at the current length index in the data object. This effectively adds item to the array.
//this.length++;: Increments the length property by 1, indicating that a new element has been added to the array.
//return this.length;: Returns the new length of the array after adding item.
//Creating an Instance (mynewarry):
//const mynewarry = new MyArry();: Creates a new instance of the MyArry class, initializing mynewarry with length set to 0 and data as an empty object {}.
//Calling push("apple") Method:
//mynewarry.push("apple");: Calls the push method on mynewarry instance, passing "apple" as the item parameter.

//After this line executes:

//"apple" will be stored in mynewarry.data at index 0 (this.data[0] = "apple";).
//mynewarry.length will be 1, indicating there is one element in the array.

class Mystudents{
    constructor(){
        this.length = 0;
        this.data ={};
    }
    push(items){
        this.data[this.length] = items; // this.data[this.length] = items;: Imagine this.data as your magic box, and this.length tells you where to put the next thing. So, you're putting items (could be anything like toys or snacks) into the box at the position indicated by this.length. 
        this.length++;
        return this.length;
    }
    get(index){
        return this.data[index];
        
    }
}
const mynewarrry = new Mystudents();
mynewarrry.push("hello");
mynewarrry.push("hello1");
mynewarrry.push("hello2");
mynewarrry.push("hello3");
console.log(mynewarrry.get(2));
