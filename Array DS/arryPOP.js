class Students{
    constructor(){
      this.length = 0;
      this.data = {};
    }
    push(item){
      this.data[this.length] = item;
      this.length++;
      return this.length;
      
    }
    pop(){
      const lastitem = this.data[this.length-1];
      delete this.data[this.length-1];
      return lastitem;
    }
      
      
    
  }
  const newadata = new Students();
  newadata.push("hello");
  newadata.push("my");
  newadata.push("name");
  newadata.push("is");
  newadata.push("avinash");
  console.log(newadata);
  newadata.pop();
  console.log(newadata);



  // Class Students
//Constructor:
//When we create a new toy box (Students), it's empty at first.
//this.length = 0; means the box starts with zero toys.
//this.data = {}; means the box is empty and ready to hold toys.
//Methods
//push(item):

//This is like adding a new toy to the box.
//this.data[this.length] = item; puts the toy in the next available spot.
////his.length++; increases the count of toys in the box by one.
//return this.length; gives back the new total number of toys in the box.
//pop():

//This is like taking the last toy out of the box.
//const lastItem = this.data[this.length-1]; finds the last toy in the box.
//delete this.data[this.length-1]; removes that toy from the box.
//return lastItem; gives you the toy you just took out.//