// Declare a variable x with a value of 10. What will console.log(x + 5) output?

let x = 10 ;
console.log(x + 5);


// What is the result of typeof "hello"?


console.log(typeof("hello"));


// Write a function that returns the larger of two numbers.

let a = 67;
let b = 200;
if (a > b){
    console.log(a)
}else
console.log(b)


// Use a switch statement to return a message based on the day of the week.

let Today = "Sunday";

switch (Today) {
    case "Monday":
        console.log("You are Right!Toady's Monday");
        break;
    case "Tuesday":
        console.log("You are Right! Toady's Tuesday");
        break;
    case "Friday":
        console.log("You are Right! Toady's Friday");
        break;
    case "Saturday":
        console.log("You are Right! Toady's Saturday");
        break;
    case "Sunday":
        console.log("You are Right! Toady's Sunday");
        break;
    default:
        console.log("Unknown Day");
}


// Write a loop that prints numbers from 1 to 10.

for ( i=1 ; i<=10 ; i++){

    console.log("i = " + i )
}


// Create an array with 5 different elements and print each element using a for loop.

fruits = [ "apple" , "banana" , "date" , "orange" , "mango"];

for (let i=0 ; i<=fruits.length ; i++){
    console.log(fruits[i]);
}


// Implement a while loop that prints numbers from 10 to 1.

var i = 1;
while(i<=10){
    console.log("i = " + i);
    i++
}


// Write a function to check if a number is even or odd.

let Num = 78;
if (Num % 2 === 0){
console.log("Number is Even");
}else

console.log("Number is Old");


// Use a ternary operator to check if a number is greater than 10.

let number = 12;

let result = number > 10 ? "The number is greater than 10" : "The number is 10 or less";

console.log(result);




// Write a program that counts from 1 to 20 but skips the number 13.

for ( i=1 ; i<=20 ; i++){

   if (i==13){
        
        continue;
    }

    console.log("i = " + i );
}



