// Array Method Questions


// 1. **Managing a To-Do List**
//    - Create an array named `todoList` with the following tasks: 'Buy groceries', 'Clean the house', 'Pay bills'.
//    - Add 'Prepare dinner' to the end of the array.
//    - Remove the first task from the array once it's done.
//    - Insert 'Call the doctor' at the beginning of the array.
//    - Print the final array.


let todoList = ["Buy groceries", "Clean the house", "Pay bills"];

todoList.push("Prepare dinner");
console.log(todoList);
todoList.shift();
console.log(todoList);
todoList.unshift("Call the doctor");
console.log(todoList);



//-------------------------------------------------------------------------------------------------------------------


// 2. **Student Grades**
//    - Create two arrays: `mathGrades` with [85, 90, 78] and `scienceGrades` with [88, 92, 80].
//    - Concatenate these arrays into a new array `allGrades`.
//    - Print the highest grade from the `allGrades` array.
//    - Print the lowest grade from the `allGrades` array.



let mathGrades = [85, 90, 78];
let scienceGrades =  [88, 92, 80];
let allGrades = mathGrades.concat(scienceGrades);
let max = Math.max (...allGrades);     // spread operator ... allows the elements of the allGrades 
console.log(max);                          //array to be passed individually to Math.max():
let min = Math.min (...allGrades);     
console.log(max);                                      



//----------------------------------------------------------------------------------------------------------------------



// 3. **Organizing Library Books**
//    - Create an array named `books` with the following titles: 'The Great Gatsby', 'Moby Dick', 'War and Peace', '1984', 'Ulysses'.
//    - Slice the array to get the titles from index 1 to 3 (inclusive).
//    - Splice the array to replace 'Moby Dick' with 'Pride and Prejudice' and 'To Kill a Mockingbird'.
//    - Print the final array of books.


let books = ['The Great Gatsby', 'Moby Dick', 'War and Peace', '1984', 'Ulysses'];
let arr  = books.slice(1,4);
console.log(arr);
let arr2 = books.splice(1 , 2  , 'Pride and Prejudice' , 'To Kill a Mockingbird');
console.log(arr2);
console.log(books);


//------------------------------------------------------------------------------------------------------------------


// 4. **Transforming Prices**
//    - Create an array named `prices` with the following values: [100, 200, 300, 400, 500].
//    - Use the `map` method to create a new array `discountedPrices` that contains each price with a 20% discount.
//    - Print the `discountedPrices` array.


prices = [100, 200, 300, 400, 500];
var discountedPrices = 0.20;
discountedPrices = prices.map(x=> x *(1 - discountedPrices));
console.log(discountedPrices);


//-----------------------------------------------------------------------------------------------------------------


// 5. **Filtering Age Data**
//    - Create an array named `ages` with the following values: [12, 5, 8, 130, 44, 18, 25, 30].
//    - Use the `filter` method to create a new array `adultAges` that contains only the ages that are 18 and above.
//    - Print the `adultAges` array.


let age = [12, 5, 8, 130, 44, 18, 25, 30];
let adultAges = age.filter( x => x > 18);
console.log(adultAges);


//----------------------------------------------------------------------------------------------------------------


// 6. **Calculating Total Sales**
//    - Create an array named `sales` with the following values: [150, 300, 450, 600, 750].
//    - Use the `reduce` method to calculate the total sales.
//    - Print the total sales amount.


let sales = [150, 300, 450, 600, 750];
let total =sales.reduce((sum , x) => sum + x ,0) ;
console.log(total);

//----------------------------------------------------------------------------------------------------------------


// 7. **Locating Cities**
//    - Create an array named `cities` with the following elements: 'New York', 'Los Angeles', 'Chicago', 'Houston', 'Phoenix', 'Philadelphia'.
//    - Use the `find` method to find the first city that has more than 6 characters in its name.
//    - Use the `findIndex` method to find the index of the first city that starts with 'H'.
//    - Print the results.

let cities = [ 'New York', 'Los Angeles', 'Chicago', 'Houston', 'Phoenix', 'Philadelphia'];
let A = cities.find(city => city.length > 6);
console.log(A);
let C = cities.findIndex(city => city.startsWith('H'));
console.log(C);

//------------------------------------------------------------------------------------------------------------------



// 9. **Creating a Sentence from Words**
//    - Create an array named `words` with the following elements: ['Learning', 'JavaScript', 'is', 'fun', 'and', 'rewarding'].
//    - Use the `join` method to create a single sentence from the array elements, separated by spaces.
//    - Print the resulting sentence.


let words = ['Learning', 'JavaScript', 'is', 'fun', 'and', 'rewarding'];
let result = words.join();
console.log(result);

// white space 


let word = ['Learning', 'JavaScript', 'is', 'fun', 'and', 'rewarding'];
let Result = word.join(' ');
console.log(Result);

// with hypen -

let Word = ['Learning', 'JavaScript', 'is', 'fun', 'and', 'rewarding'];
let Result2 = Word.join('-');
console.log(Result2);


//--------------------------------------------------------------------------------------------------------------


// 10. **Sorting and Reversing Numbers**
//     - Create an array named `numbers` with the following values: [5, 3, 8, 1, 2, 7, 6, 4].
//     - Use the `sort` method to sort the array in ascending order.
//     - Use the `reverse` method to reverse the order of the elements in the sorted array.
//     - Print the final array.


let numbers = [5, 3, 8, 1, 2, 7, 6, 4];
Ans2 = numbers.sort();
console.log(Ans2);

Ans = numbers.reverse();
console.log(Ans);



//--------------------------------------------------------------------------------------------------------------------------



