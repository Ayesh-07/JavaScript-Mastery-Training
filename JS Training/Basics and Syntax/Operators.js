// 1. Arithmetic Operators


// Addition (+)
// Subtraction (-)
// Multiplication (*)
// Division (/)
// Modulus (%) 



let a = 5;
let b = 9;

// Addition (+)

console.log(a+b);

// Subtraction (-)

console.log(a-b);

// Multiplication (*)

console.log(a*b);

// Division (/)

console.log(a/b);

// Modulus (%) 

console.log(a%b);


//---------------------------------------------------------------------------------------------------------------------


// 2. Comparison Operators


// Equal to (==)
// Strict equal to (===)
// Not equal to (!=)
// Strict not equal to (!==)
// Greater than (>)
// Less than (<)
// Greater than or equal to (>=)
// Less than or equal to (<=)


// Equal to (==)

console.log(a==b);    //  ya value ko check kayr ga 

// Strict equal to (===)

console.log(a===b);    //  ya value aur type ko bhi check kayr ga

// Not equal to (!=)

console.log(a!=b);


// Strict not equal to (!==)

console.log(a!==b);

// Greater than (>)

console.log(a>b);


// Less than (<)

console.log(a<b);


// Greater than or equal to (>=)

console.log(a>=b);


// Less than or equal to (<=)

console.log(a<=b);



//------------------------------------------------------------------------------------------------------

// 3. Logical Operators


// AND (&&)
// OR (||)
// NOT (!)


// AND (&&)

console.log( a == b && a < b);


// OR (||)

console.log( a == b || a < b);


// NOT (!)

console.log(  !(a < b) );


//-----------------------------------------------------------------------------------------------------------------


// 4. Assignment Operators


// Assignment (=)
// Add and assign (+=)
// Subtract and assign (-=)
// Multiply and assign (*=)
// Divide and assign (/=)



// Assignment (=)

console.log( b = a);

// Add and assign (+=)

console.log( a += 5);

// Subtract and assign (-=)

console.log( b -= 5);    // b ki value 5 hai

// Multiply and assign (*=)

console.log( a *= 9); 

// Divide and assign (/=)

console.log( b /= 5);   // b ki value 5 hai


//-----------------------------------------------------------------------------------------------------------------



// 5-  Unary Operators


// Unary Plus (+): Converts its operand to a number.
// Unary Negation (-): Converts its operand to a number and negates it.
// Increment (++): Increases its operand by one. Can be used as a prefix or postfix.
// Decrement (--): Decreases its operand by one. Can be used as a prefix or postfix.



// Unary Plus (+)

let str = "5";
let num = +str;  // num is 5 (number)
console.log(num);


// Unary Negation (-)

let n = 5;
let negX = -n; // negX is -5
console.log(negX);


//post Increment (++)

let p = 9

console.log(p++);
console.log(p++);

// pre Increment (++)

 let c = 9

console.log(++c);

// post Decrement (--)

 let f = 9
console.log(f--);
console.log(f--);


// pre Decrement (--)

console.log(--f);


//-----------------------------------------------------------------------


// 6. Type Operators

// typeof
// instanceof

// Summary
// typeof
// Used to determine the type of a variable.
// Returns a string representing the type of the operand.
// Useful for checking primitive types and some non primitive/ reference types.


// instanceof
// Used to check if an object is an instance of a particular constructor or class.
// Useful for checking the prototype chain of an object to determine its type.


// typeof

console.log(typeof 42);           // "number"
console.log(typeof 'hello');      // "string"
console.log(typeof true);         // "boolean"
console.log(typeof undefined);    // "undefined"
console.log(typeof null);         // "object" (this is a known quirk in JavaScript)
console.log(typeof Symbol());     // "symbol"
console.log(typeof BigInt("668990"));     // "bigInt"




// instanceof

console.log(typeof {});           // "object"
console.log(typeof []);           // "object"
console.log(typeof function(){}); // "function"


//--------------------------------------------------------------------------------------------------------------------------------------------


// 7. Ternary Operator       


// Conditional (? :)

let number = 98;

let result = (number > 100 ? "You are True" : "You are wrong");
console.log(result);


//--------------------------------------------------------------------------------------------------------------


// 5. Bitwise Operators


// AND (&)
// OR (|)
// XOR (^)
// NOT (~)
// Left shift (<<)
// Right shift (>>)



//Summary

// AND (&): Sets each bit to 1 if both bits are 1.
// OR (|): Sets each bit to 1 if at least one of the bits is 1.
// XOR (^): Sets each bit to 1 if only one of the bits is 1.
// NOT (~): Inverts all the bits.
// Left Shift (<<): Shifts bits to the left, filling with zeros from the right.
// Right Shift (>>): Shifts bits to the right, filling with the sign bit from the left.




let val = 5; // binary: 0101
let val2 = 3; // binary: 0011

// AND (&)

console.log(val & val2); // binary: 0001, result is 1


// OR (|)

console.log(val | val2); // binary: 0111, result is 7


// XOR (^)

console.log(val ^ val2); // binary: 0110, result is 6


// NOT (~)

console.log(~val); // binary: 11111111111111111111111111111010, result is -6 (2's complement)


// Left shift (<<)

console.log(val << 1); // binary: 1010, result is 10


// Right shift (>>)

console.log(val << 1); // binary: 0010, result is 2








// NOT (~)  Summary

/*

Decimal 5:
   00000000 00000000 00000000 00000101
   
Bitwise NOT (~5):
   00000000 00000000 00000000 00000101   // Original
   ---------------------------------------
   11111111 11111111 11111111 11111010   // Inverted

Two's Complement Conversion (Magnitude of -6):
   11111111 11111111 11111111 11111010   // Inverted result
   ---------------------------------------
   00000000 00000000 00000000 00000101   // Inverted bits
   +                                1
   ---------------------------------------
   00000000 00000000 00000000 00000110   // Binary 6

Decimal Result:
   -6
*/