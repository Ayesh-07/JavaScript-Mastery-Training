//     Variables are containers that store values.

/*  

+------------------+------------------+----------------------------+
|     Scope        |     Hoisting     |   Re-declaration/Assign    |
+------------------+------------------+----------------------------+
| Function scope   | Hoisted and      | Can re-declare and assign  |
| (or global scope) | initialized to   | within the same scope      |
|                  | undefined        |                            |
+------------------+------------------+----------------------------+
| Example:         | Example:         | Example:                   |
|                  |                  |                            |
| function demo()  | console.log(a);  | var a = 10;                |
| {                | // undefined     | var a = 20; // no error     |
|   var a = 5;     | var a = 5;       |                            |
|   console.log(a);| console.log(a);  |                            |
| }                | // 5             |                            |
+------------------+------------------+----------------------------+



+------------------+------------------+----------------------------+
|     Scope        |     Hoisting     |   Re-declaration/Assign    |
+------------------+------------------+----------------------------+
| Block scope      | Hoisted but not  | Cannot re-declare in the    |
|                  | initialized       | same block scope           |
|                  | (Temporal Dead   |                            |
|                  | Zone)            |                            |
+------------------+------------------+----------------------------+
| Example:         | Example:         | Example:                   |
|                  |                  |                            |
| function demo()  | console.log(a);  | let a = 10;                |
| {                | // ReferenceError | let a = 20; // SyntaxError  |
|   let a = 5;     | let a = 5;       |                            |
|   console.log(a);| console.log(a);  |                            |
| }                | // 5             |                            |
+------------------+------------------+----------------------------+



+------------------+------------------+----------------------------+
|     Scope        |     Hoisting     |   Re-declaration/Assign    |
+------------------+------------------+----------------------------+
| Block scope      | Hoisted but not  | Cannot re-declare or re-    |
|                  | initialized       | assign after initialization |
|                  | (Temporal Dead   |                            |
|                  | Zone)            |                            |
+------------------+------------------+----------------------------+
| Example:         | Example:         | Example:                   |
|                  |                  |                            |
| function demo()  | console.log(a);  | const a = 10;              |
| {                | // ReferenceError | a = 20; // TypeError       |
|   const a = 5;   | const a = 5;     |                            |
|   console.log(a);| console.log(a);  |                            |
| }                | // 5             |                            |
+------------------+------------------+----------------------------+
*/




//--------------------------------------------------------------------------------------------------------------




// Var  Variable in JS

    var myName = "Ayesha";
    console.log (myName);

    var myName = "Ayesha";
    myName = "Fatima"  // allow re-assignment 
    console.log(myName);    // No Error     Redeclaration and Re-assignment 



    console.log(a);   // a is not defined     var declarations are hoisted and initialized to undefined

//--------------------------------------------------------------------------------------------------------------


// Let  Variable in JS

let myName = "Ayesha";
console.log (myName);
myName = "Fatima"    // allow re-assignment 
console.log(myName);

let myName = "Ayesha";

console.log(myName);    // Error    dentifier 'myName' has already been declared 


//console.log(a);   //   ReferenceError: a is not defined       


//--------------------------------------------------------------------------------------------------------------



// Const  Variable in JS

const myName = "Ayesha";
// myName = "Fatima";      //    TypeError: Assignment to constant variable.   Not allow re-assignment 
console.log (myName);
    
// const myName = "Nudrat";

//console.log(myName);    // Error    dentifier 'myName' has already been declared 


// console.log(a);   //   ReferenceError: a is not defined     


//--------------------------------------------------------------------------------------------------------------

