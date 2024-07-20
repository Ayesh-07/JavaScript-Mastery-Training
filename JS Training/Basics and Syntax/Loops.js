
//  Loops:  for   ,     while    ,    do...while




// For Loop Syntax 

/* for (initialization; condition; increment/decrement) {
      code to be executed
   }
  
*/

//Example  1

for ( i=1 ; i<=5 ; i++){
    console.log("Hello Ayesha");
}


//Example  2

let sum = 0;
let Count = 50;
for (let i = 1; i <= Count; i++) {
  sum += i; // This is a shorthand for sum = sum + i;
}
console.log(sum); // Output: 1275



//Example  3

for (let i = 1; i <= 10; i++) {

    console.log("i =" , i );
   
  }


//----------------------------------------------------------------------------------------------------------


// while   Loop  Syntax


/* 


let condition = true; // Initialization
while (condition) {
  // Loop body
  // Code to be executed
  // Update condition
}


*/


// Example  1

var i = 1;
while(i<=5){
 console.log(i);
 i++
}



// Example  2 


let Sum = 0;
var i = 1;

while (i <= 50) {
  Sum += i;
  i++;
}

console.log(Sum); // Output: 1275


// Example 3 

// Initialization
let counter = 1;
let SUM = 0;

// Condition
while (counter <= 100) {
  // Code inside the loop
  SUM += counter; // Perform operations
  counter++; // Increment counter
}

// Print/Output
console.log(SUM); // Print result after the loop



//--------------------------------------------------------------------------------------------------------



// Do --- While


/*

let condition = true; // Initialization
do {
  // Loop body
  // Code to be executed
  // Update condition
} while (condition);


*/



//Example 1


let grade = 20;

do{

console.log("grade =" ,grade );
grade++;

}while(grade <=  50);


//Example 2



var i = 1;

do{

let Table = 2 * i;
Table = ("2 * " + i  + "=" + Table );
console.log(Table)
i++;

}while(i <=  10);



//-------------------------------------------------------------------------------------------



