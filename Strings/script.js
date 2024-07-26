// String Methods


// charAt(): Returns the character at the specified index.


let str = 'hello';
console.log(str.charAt(1)); 


//--------------------------------------------------------------------------------------------------------------


// charCodeAt(): Returns the Unicode of the character at the specified index.

let str2 = 'hello';
console.log(str2.charCodeAt('o')); 


//---------------------------------------------------------------------------------------------------------

// concat(): Combines the text of two (or more) strings.

let str3 = "Hello";
let str4 = "Ayesha";
let result = str3.concat(str4);
console.log(result);

//---------------------------------------------------------------------------------------------------------------

// includes(): Determines whether one string may be found within another string.

let str5 = "Islam";
console.log(str5.includes('a'));

//----------------------------------------------------------------------------------------------------------------

// indexOf(): Returns the index of the first occurrence of a specified value.

let str6 = "Islam";
console.log(str6.indexOf('a'));


//-----------------------------------------------------------------------------------------------------------------

// lastIndexOf(): Returns the index of the last occurrence of a specified value.

let str7 = "Islam";
console.log(str7.indexOf('m'));

//-------------------------------------------------------------------------------------------------------------

// replace(): Replaces the first match of a string with another string.

let str8 = "Pakistan";
console.log(str8.replace('Pakistan' , 'Punjab'));

//-------------------------------------------------------------------------------------------------------------


// replaceAll(): Replaces all matches of a string with another string.

let str9 = ['Hello Ayesha and Hello World'];
// Access the first element of the array and call replaceAll on it
let result2 = str9[0].replaceAll('Hello', 'Assalam');
console.log(result2);

//------------------------------------------------------------------------------------------------------------

// search(): Executes a search for a match between a regular expression and a string.

let str0 = ['Hello Ayesha and Hello World'];

let res = str0[0].search('Hello');
console.log(res);

//-----------------------------------------------------------------------------------------------------------------

// slice(): Extracts a section of a string and returns it as a new string.


let Str = ['Hello Ayesha and Hello World'];

let res4 = Str[0].slice(1 , 8);
console.log(res4);



// split(): Splits a string into an array of substrings.

let strr = "Hello, how are you?";
let words = strr.split(" ");
console.log(words); 


// substring(): Returns a part of the string between the start and end indexes.

let strrr = "Hello, how are you?";
let part1 = strrr.substring(0, 5);
console.log(part1); // "Hello"

let part2 = strrr.substring(7, 10);
console.log(part2); // "how"

let part3 = strrr.substring(7);
console.log(part3); // "how are you?"


// toLowerCase(): Converts the string to lower case.


let a = ['HELLO'];

let RES = a[0].toLowerCase(a) ;         // a is an array, and arrays do not have a toLowerCase method. 
console.log(RES);                      // The toLowerCase method is a string method.  a[0] accesses the first 
                                      //  (and only) element of the array a.
                               

// toUpperCase(): Converts the string to upper case.

let string = "hello"
console.log(string.toUpperCase()) ;



// trim(): Removes whitespace from both ends of a string.

let String = "   Hello Ayesha   "
console.log(String.trim()) ;


// trimStart(): Removes whitespace from the beginning of a string.

let String1 = "   Hello Ayesha   "
console.log(String1.trimStart()) ;



// trimEnd(): Removes whitespace from the end of a string.

let String2 = "   Hello Ayesha   "
console.log(String2.trimEnd()) ;

// repeat(): Constructs and returns a new string which contains the specified number of copies of the string.

let String3 = "Hello Ayesha";
console.log(String3.repeat(5)) ;

// startsWith(): Determines whether a string begins with the characters of a specified string.


let String4 = "Hello Ayesha";
console.log(String3.startsWith('H')) ;

// endsWith(): Determines whether a string ends with the characters of a specified string.


let String5 = "Hello Ayesha";
console.log(String5.endsWith('A')) ;