// Prototypes in JS

// JS objects have a special property called prototype.
// A javaScript object is an entity having state and behavior (properties and method).

// We can set prototype using _ _ proto _ _

// *If object & prototype have same method,
// object’s method will be used.


//----------------------------------------------------------------------------------------------------------------


//  simple way for making objects 

//state and behavior (properties and method)

const student = {
    fullName : 'Ayesha Nudrat',
    marks: 82.90,

    printMarks : function(){
        console.log("marks = " , this.marks)   //'this' is used within the printMarks method to refer to the student object itself. 
                                               // 'this' is used to access properties and methods of the object within its methods.
    }

}

console.log(student);
console.log(student.printMarks());
console.log(student.fullName);


//--------------------------------------------------------------------------------------------------------------



const employee = {
    fullName : 'Ayesh',
    salary: 50000,

    caluTax(){
        console.log( "your tax rate is 10%");   //'this' is used within the printMarks method to refer to the student object itself. 
                                               // 'this' is used to access properties and methods of the object within its methods.
    }

}

console.log(employee);
console.log(employee.caluTax());



const hiraKhan = {
    salary :10000,
}

//prototype

hiraKhan.__proto__ = employee;


//-----------------------------------------------------------------------------------------------

// Classes

// Class is a program-code template for creating objects.

// class MyClass {

// constructor( ) { ... }

// myMethod( ) { ... }

// }

// let myObj = new MyClass( ) ;


class ToyotaCar{

    constructor(brand , Mileage) {
        console.log('creating new objects');
        this.brand = brand;
        this.Mileage = Mileage;

    }
    start(){
        console.log("Start");
    }

    stop(){
        console.log("Stop");  }

    // setBrand(brand) {
    //     this.brand = brand;
    // }
   
}

console.log(ToyotaCar);


let fortuner = new ToyotaCar('fortuner' , 10);

let Lexus = new ToyotaCar('Lexus' , 20);


// Inheritance in JS

// inheritance is passing down properties & methods from parent class to child class.

// class Parent {

// }

// class Child extends Parent {

// }

// *If Child & Parent have same method, child’s
// method will be used. [Method Overriding]



// super Keyword

// The super keyword is used to call the constructor of its parent class to access the parent's
// properties and methods.

// super.parentMethod( args )




class uxDesigner {

    constructor(age,gender){
        console.log("creating new object");
        this.age = age ;
        this.gender = gender ; 

    }

    value =  console.log("Hi ! i am Designer.")
    work(){
    console.log("Design something new. ") }

    eat(){
        console.log("I want to Eat");
    }
   
}

console.log(uxDesigner);


class Developer extends uxDesigner{
   
    constructor(company){
        super(); // to envoke the parent's constractor
        console.log("Creating new object.")
        this.comapny =company;
    }
  

    work(){
        
        console.log("sloving Problems and build something new. ")
        
    }
}

let ayesha =new Developer(23 , "Female");
let Anni = new uxDesigner("Abode");




