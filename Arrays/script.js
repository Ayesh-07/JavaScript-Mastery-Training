// Array Methods

let marks = [ 1 , 2 , 3 , 4, 5 ,6];
console.log(marks);


// push(): Adds one or more elements to the end of an array.

marks.push(7 , 8);
console.log(marks);


// pop(): Removes the last element from an array.

marks.pop();
console.log(marks);


// shift(): Removes the first element from an array.

marks.shift();
console.log(marks);


// unshift(): Adds one or more elements to the beginning of an array.

marks.unshift(0 , 1);
console.log(marks);


// concat(): Merges two or more arrays.
let grade = [ 9, 3 , 5 ,3,5,1]
result = marks.concat(grade);
console.log(result);



// slice(): Returns a shallow copy of a portion of an array. It does not modify  the original array.


var slicedArr = marks.slice( );
console.log(slicedArr);

console.log (marks.slice( 2, 4));


// splice(): Adds, removes, or replaces elements in an array.  It modify  the original array.    
console.log(marks);
let removed = marks.splice( 1 , 2 , 9. , 9);
console.log(removed);



// for Each():   The forEach method executes a provided function once for each array element.

const numbers = [1, 2, 3, 4, 5];
numbers.forEach((number) => {
    console.log(number);
});



// map(): Creates a new array populated with the results of calling a provided function on every element.

const num2 = [1, 2, 3, 4, 5];
const squaredNumbers = num2.map((number) => number * number);
console.log(squaredNumbers);



// filter(): Creates a new array with all elements that pass the test implemented by the provided function.


let Numbers = [1,  2 ,3, 4, 5, 6,7]
let isEven = Numbers.filter( (number)=>{
return number % 2 === 0;

});
console.log(isEven);



// reduce(): Executes a reducer function on each element, resulting in a single output value.

const number3 = [1, 2, 3, 4, 5];
const sum = number3.reduce((total, number) => total + number, 0);
console.log(sum);





// find(): Returns the first element that satisfies the provided testing function.


let arr = [1, 2, 3, 4];
let found = arr.find(x => x > 2);
console.log(found); // 3







// findIndex(): Returns the index of the first element that satisfies the provided testing function.


let arr2 = [1, 2, 3, 4];
let index = arr2.findIndex(x => x > 2);
console.log(index); // 2




// includes(): Determines whether an array includes a certain element.

let arr3 = [1, 2, 3, 4];
console.log(arr3.includes(2)); // true
console.log(arr3.includes(5)); // false





// indexOf(): Returns the first index at which a given element can be found.

let arr4 = [1, 2, 3, 4];
console.log(arr4.indexOf(3)); // 2
console.log(arr4.indexOf(5)); // -1





// lastIndexOf(): Returns the last index at which a given element can be found.

let arr5 = [1, 2, 3, 4, 3];
console.log(arr5.lastIndexOf(3)); // 4





// join(): Joins all elements of an array into a string.

let arr6 = [1, 2, 3];
let str = arr6.join('-');
console.log(str); // '1-2-3'








// reverse(): Reverses the order of the elements in an array.

let arr8 = [1, 2, 3];
arr8.reverse();
console.log(arr8); // [3, 2, 1]





// sort(): Sorts the elements of an array in place.

let arr9 = [3, 1, 4, 1, 5];
arr9.sort();
console.log(arr9); // [1, 1, 3, 4, 5]

