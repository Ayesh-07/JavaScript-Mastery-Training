// Condional Statements 

//  1 - if, else if, else,  statements

//  2 - switch statements




//----------------------------------------------------------------------------------------------------------


// - if, else if, else,  statements


let userInput = prompt("Please enter a number:");
let Num = Number(userInput);

if (Num % 2 === 0){

    console.log ("Your number is Even");
}else{

    console.log ("Your number is Odd");
}


//---------------------------------------------------------------------------------------------------------------



//  - switch statements



let fruit = "apple";

switch (fruit) {
    case "apple":
        console.log("It's an apple");
        break;
    case "banana":
        console.log("It's a banana");
        break;
    case "orange":
        console.log("It's an orange");
        break;
    default:
        console.log("Unknown fruit");
}




