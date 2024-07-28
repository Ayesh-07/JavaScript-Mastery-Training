// Functions


// Write a function to calculate the area of a circle given its radius.



function area_circle(Radi){

 var area = Math.PI * Radi * Radi;
 return area;
};

console.log (area_circle(4));

//------------------------------------------------------------------------------------------------------------


// Create a function that checks if a string is a palindrome.

function isPalindrome (str){

    let checkstr  = str.split('').reverse().join('');

    return str == checkstr;
} 

console.log(isPalindrome("pakistan"));

//------------------------------------------------------------------------------------------------------------------

// Implement a function to find the factorial of a number using a loop.

function factorial(n) {
    // Return 1 for the base case when n is 0 or 1
    if (n === 0 || n === 1) {
        return 1;
    }

    let result = 1;
    
    // Use a loop to multiply result by each number from 2 to n
    for (let i = 2; i <= n; i++) {
        result *= i;
    }
    
    return result;
}
console.log(factorial(5));
//--------------------------------------------------------------------------------------------------------------------




// Map
// Given an array of numbers, create a new array containing the square root of each number.


function squ_root(...numbers){

return numbers.map(nums=>Math.sqrt(nums));

};

console.log(squ_root(2 ,3,5,7,4,3,2,4,0));

//-------------------------------------------------------------------------------------------------------


// Transform an array of objects representing people (with name and age properties) into an array of their ages.

const people = [
    { name: 'Alice', age: 30 },
    { name: 'Bob', age: 25 },
    { name: 'Charlie', age: 35 },
    { name: 'David', age: 40 }
];

function ages(peoples){

    return peoples.map(peop => peop.age );
}

console.log(ages(people));

//-----------------------------------------------------------------------------------------------------------------


// Convert an array of strings to an array of uppercase strings.

const furits = [ 'pear' , 'orange' , 'apple' ,'banana' ];

function foods(items){

    return items.map(food => food.toUpperCase())


}

console.log(foods(furits));


//--------------------------------------------------------------------------------------------------------------

// Filter

// Filter out negative numbers from an array of numbers.


let nums = [ 0 , 8 , -3 , -2, 2];

function negNum(num){

    return num.filter(Num =>  Num < 0 )
       
    }
    console.log(negNum(nums));


    //----------------------------------------------------------------------------------------------------------



// Extract elements from an array that are divisible by 3.

var divisible = [2 , 4, 6, 9, 12 , 45, 23, 21 , 18, 44 ];

function divThree(digits){

return digits.filter( nums => nums%3 === 0);
}

console.log(divThree(divisible));

//--------------------------------------------------------------------------------------------------------

// Find all strings in an array that contain the letter 'a'.


let letters = ["pale" , "apple" , "ball" , "aunt" , "ice" , "cone" ];

function Letter(str){

    return str.filter(Items => Items.includes('a'));
}

console.log( Letter(letters));


//-------------------------------------------------------------------------------------------------------------------

// ForEach
// Iterate over an array of numbers and print each number multiplied by 3.

var divisible = [2 , 4, 6, 9, 12 , 45, 23, 21 , 18, 44 ];

divisible.forEach(num => {
    console.log(num * 3);
});

//------------------------------------------------------------------------------------------------------


// Create a new array by adding '!' to the end of each string in an existing array.

var Numbers = [2 , 4, 6, 9, 12 , 45, 23, 21 , 18, 44 ];

Numbers.forEach(num => {
    console.log(num + "!");
});

//----------------------------------------------------------------------------------------------------------

// Calculate the average of an array of numbers using forEach.

var Numbers = [2, 4, 6, 9, 12, 45, 23, 21, 18, 44];
let count = Numbers.length;
var sum = 0;

// Use forEach to sum up the numbers
Numbers.forEach(num => {
    sum += num;
});

// Calculate the average after the loop
var average = count > 0 ? sum / count : 0; // Avoid division by zero

console.log(average); // Output the average

//-----------------------------------------------------------------------------------------

// Reduce
// Find the minimum value in an array.

var Numbers = [2, 4, 6, 9, 12, 45, 23, 21, 18, 44];

var Result = Numbers.reduce((min , num) => {
   return num < min ? num : min;
    
},Numbers[0]);

console.log(Result);

//--------------------------------------------------------------------------------------------------------------------
// Calculate the total length of all strings in an array.

var Name = ["Ayesha " , "Zina", "Nawazish"];

var Result = Name.reduce((totalLen , str) => {

    return totalLen + str.length ;

}, 0);

console.log(Result);

//--------------------------------------------------------------------------------------------------

// Group an array of objects by a specific property using reduce.


var PEOPLE = [
    { name: "Alice", age: 30 },
    { name: "Bob", age: 25 },
    { name: "Charlie", age: 30 },
    { name: "David", age: 25 },
    { name: "Eve", age: 35 }
];

// Group people by their age using reduce
var groupedByAge = PEOPLE.reduce((acc, person) => {
    // If the age group does not exist in the accumulator, create it
    if (!acc[person.age]) {
        acc[person.age] = [];
    }
    // Add the person to the appropriate age group
    acc[person.age].push(person);
    return acc;
}, {}); // Initialize with an empty object

console.log(groupedByAge);


//---------------------------------------------------------------------------------------------
// Combining Functions


// Given an array of numbers, filter out even numbers, double the odd numbers, and then calculate the sum of the resulting array.


var Numbers = [2, 4, 6, 9, 12, 45, 23, 21, 18, 44];


function evenNum(items){

    return items.filter(nums => nums % 2 ==  0);

}

console.log(evenNum(Numbers));


var Numbers = [2, 4, 6, 9, 12, 45, 23, 21, 18, 44];

// Filter odd numbers and then square them
let result = Numbers.filter(item => item % 2 !== 0)  // Filter out odd numbers
                    .map(item => item * item);      // Square each odd number

console.log(result); // Output the resulting array

    


//------------------------------------------------------------------------------------------------------------------------



// Create a function that takes an array of objects representing products with properties name and price. Use filter and reduce to find the total price of products with a price greater than 10.

const products = [
    { name: "Product A", price: 5 },
    { name: "Product B", price: 15 },
    { name: "Product C", price: 25 },
    { name: "Product D", price: 8 }
];


// Function to calculate the total price of products with a price greater than 10
function totalPriceOfExpensiveProducts(products) {
    // Step 1: Filter products with price greater than 10
    const expensiveProducts = products.filter(product => product.price > 10);
    
    // Step 2: Reduce the filtered products to get the total price
    const totalPrice = expensiveProducts.reduce((total, product) => total + product.price, 0);
    
    return totalPrice;
}

console.log(totalPriceOfExpensiveProducts(products));
