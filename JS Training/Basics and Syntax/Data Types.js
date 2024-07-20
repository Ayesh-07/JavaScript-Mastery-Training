/*
                 +--------------------+
                 |  JavaScript Data   |
                 |      Types         |
                 +---------+----------+
                           |
          +----------------+----------------+
          |                                 |
+---------+---------+             +---------+---------+
|  Primitive Types  |             |  Reference Types  |
+---------+---------+             +---------+---------+
          |                                 |
          |                                 |
+---------+---------+         +-------------+---------------+
| Number            |         | Object                       |
| String            |         | Array                        |
| Boolean           |         | Function                     |
| Undefined         |         | Date                         |
| Null              |         | RegExp                       |
| Symbol            |         | Map                          |
| BigInt            |         | Set                          |
+-------------------+         +-----------------------------+
*/

// Explanation of JavaScript Data Types

// Primitive Types
// - Number: Represents both integer and floating-point numbers.
// - String: Represents a sequence of characters.
// - Boolean: Represents true or false values.
// - Undefined: Represents a variable that has not been assigned a value.
// - Null: Represents the intentional absence of any object value.
// - Symbol: Represents a unique and immutable value, often used as keys for object properties.
// - BigInt: Represents whole numbers larger than the range of the Number type.

//  Non- Primitive / Reference Types
// - Object: Represents an instance through which we can store collections of data or more complex entities.
// - Array: A special type of object used for storing ordered collections.
// - Function: A callable object that executes a block of code.
// - Date: Represents date and time.
// - RegExp: Represents regular expressions, used for pattern matching.
// - Map: Represents a collection of keyed data items, similar to an object but allows for keys of any type.
// - Set: Represents a collection of unique values.


//--------------------------------------------------------------------------------------------------------------




// Primitive Types

// - Number

let Numbers = 78;
console.log(Numbers);
console.log (typeof(Numbers));


let percentage = 78.90;
console.log(percentage);
console.log (typeof(percentage));


// - String:


let fullName = "Ayesha Nudrat";
console.log(fullName);
console.log (typeof(fullName));


// - Boolean



let isHonest = true ;
console.log (isHonest);
console.log (typeof(isHonest));

let isLiar =  false;
console.log (isLiar);
console.log (typeof(isLiar));


// - Null


let x = null;
console.log(x);
console.log (typeof(x));


// - Undefined


let y = undefined;
console.log(y);
console.log (typeof(y));


// - Symbol


let X = Symbol("foo");
console.log(X);
console.log (typeof(X));


// - BigInt


let Y = BigInt("2536579387");
console.log(Y);
console.log (typeof(Y));


//--------------------------------------------------------------------------------------------------------------------



//  Non- Primitive / Reference Types

// - Object


const makeUp = {

  category :  "Causual" ,
  price :  7000,
  isWaterprof: false ,
  Brand:  "Ayesh",
  rating:  5.0,
}

console.log(makeUp);
console.log (typeof(makeUp));
console.log (typeof(makeUp.category));
console.log (typeof(makeUp.price));
console.log (typeof(makeUp.isWaterprof));
console.log (typeof(makeUp.Brand));
console.log (typeof(makeUp.rating));


// two methods for access object values

console.log (makeUp["category"]);
console.log (makeUp.Brand);


// important point :   const varibale is able to Re-assignment in keys of objects













