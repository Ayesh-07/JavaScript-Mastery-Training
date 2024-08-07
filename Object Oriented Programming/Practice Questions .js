// Question:


// Write a JavaScript class Person with the following:

// A constructor that initializes name and age.
// A method displayInfo that logs the person's name and age.
// Create an instance of Person and call the displayInfo method.



class person {
    constructor(name , age ){
        this.name = name;
        this.age = age;
     }
     displayInfo(){
        console.log (this.name ,this.age)
     }
     
}

let value = new person('ayesha', 23);



//-------------------------------------------------------------------------------------------------------------


// Question:
// Write a JavaScript class Car with the following:

// A constructor that initializes make and model.
// A method displayCar that logs the car's make and model using this.
// Create an instance of Car and call the displayCar method.



class Car{
   constructor(make,model){
      this.make = make;
      this.model = model;

   }
   displayCar(){
      console.log(this.make , this.model);
   }
}

let Delax = new Car("Pakistan" , 2000);
console.log(Delax.displayCar());


//---------------------------------------------------------------------------------------------------------------

// Question:
// Write a JavaScript class Rectangle with the following:

// A constructor that initializes width and height.
// A method calculateArea that returns the area of the rectangle.
// Create an instance of Rectangle using the new keyword and call calculateArea to get the area.


class  Rectangle{
   constructor(width , height){
      this.width = width;
      this.height = height;
   }

   calculateArea(){
      console.log(this.width*this.height)
   }
}

var box = new Rectangle(45 , 90);
var box = console.log(box.calculateArea());


//----------------------------------------------------------------------------------------------------------


// Question:
// Write a JavaScript class Animal with the following:

// A constructor that initializes name.
// A method makeSound that logs "Generic animal sound".
// Then, write a subclass Dog with the following:

// A constructor that initializes name and uses super to call the parent class constructor.
// An overridden method makeSound that logs "Woof!".
// Create an instance of Dog and call the makeSound method.


class Animal{
   constructor(name){
      this.name = name;
   }
   makeSound(){
      console.log("Generic animal sound")
 
    }

}



class Dog extends Animal{
   constructor(name){
 super(name);
   
}

makeSound(){
  console.log("Woof!");

  }
}

var myDog = new Dog('Jenny');
myDog.makeSound();

//----------------------------------------------------------------------------------------


// Question:
// Write a JavaScript class Shape with the following:

// A constructor that initializes color.
// A method calculateArea that returns undefined.
// Then, write the subclasses Circle and Square:

// Circle should have a constructor that initializes color and radius, and overrides calculateArea to return Math.PI * radius * radius.
// Square should have a constructor that initializes color and sideLength, and overrides calculateArea to return sideLength * sideLength.
// Create instances of Circle and Square, and log their areas using the calculateArea method.



// Base class Shape
class Shape {
   constructor(color) {
       this.color = color;
   }

   calculateArea() {
       // Base method that returns undefined
       return undefined;
   }
}

// Subclass Circle extending Shape
class Circle extends Shape {
   constructor(color, radius) {
       super(color); // Call the parent class constructor with color
       this.radius = radius;
   }

   calculateArea() {
       // Override calculateArea to return the area of the circle
       return Math.PI * this.radius * this.radius;
   }
}

// Subclass Square extending Shape
class Square extends Shape {
   constructor(color, sideLength) {
       super(color); // Call the parent class constructor with color
       this.sideLength = sideLength;
   }

   calculateArea() {
       // Override calculateArea to return the area of the square
       return this.sideLength * this.sideLength;
   }
}

// Create instances of Circle and Square
let myCircle = new Circle('red', 5);
let mySquare = new Square('blue', 4);