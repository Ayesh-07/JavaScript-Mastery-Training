document.addEventListener('DOMContentLoaded', function() {

// Select the <h1> element by its ID and change its text content to “DOM Manipulation Example”.

var task2 = document.getElementById('header');
task2.innerText = "DOM Manipulation Example";
console.log(task2);


// Select all elements with the class name item and change their text color to blue.

var task2 = document.querySelectorAll('.item');
task2.forEach(element => {

    element.style.color ='blue';
    
});
console.log(task2);


// Add a custom data attribute data-info with the value “Important” to the <h1> element.

var task3 = document.querySelector('h1');
task3.setAttribute('data-info', 'Important');
console.log(task3);


// Retrieve and log the value of the data-info attribute to the console.

var task3 = document.querySelector('h1');
task3.getAttribute('data-info');
console.log(task3);



// Remove the data-info attribute from the <h1> element.

var task3 = document.querySelector('h1');
task3.removeAttribute('data-info');
console.log(task3);


// Change the inner HTML of the <h1> element to include bold text: <strong>DOM Manipulation Example</strong>.

var task4 = document.getElementsByTagName('h1');
task4.innerHTML = "<strong>DOM Manipulation Example</strong>";
console.log(task4);


// Set the text content of the last paragraph with class item to “Last Item”.
var task4 = document.querySelectorAll('p.item');
task4[task4.length - 1].textContent = 'Last Item';
console.log(task4[task4.length - 1]);


// Add a class highlight to the first <p> element with class item.

var task5 = document.querySelectorAll('p.item');
task5[0].classList.add('highlight');
console.log(task5[0]);

// After 3 seconds, remove the highlight class from the first <p> element with class item. You can use a setTimeout function for this.

// setTimeout(function() {
//     task5.classList.remove('highlight');
//     console.log('Highlight class removed:', task5);
// }, 3000);



// Create a new paragraph element with the text “Newly Added Item” and append it to the end of the <div> with ID container.

var task6 = document.getElementById('container');
var newParagraph = document.createElement('p');
newParagraph.textContent = 'Newly Added Item';
task6.appendChild(newParagraph);

console.log(task6);

// Create another paragraph element and insert it before the button with ID addItemBtn.

var task6 = document.getElementById('addItemBtn');
var newParagraph = document.createElement('p');
newParagraph.textContent = 'Newly Added Item';
task6.before(newParagraph);

console.log(task6);


// Directly select and remove the last paragraph element with class item from the DOM.



var task7 = document.querySelectorAll('p.item');
if (task7.length > 0) {
  task7[task7.length - 1].remove();
  task7 = document.querySelectorAll('p.item');
  console.log(task7[task7.length - 1]);
}




// Remove the newly added paragraph element that you appended in the previous step.

newParagraph.classList.add('highlight2');

var task7 = document.querySelector('.highlight2');
console.log(task7);
task7.remove();
console.log(task7);



// 8. Bonus Task: Dynamic Content
// Create a new paragraph element with a unique ID and append it to the <div> with ID container. 
//The content of the new <p> element should be “Dynamic Item X” where X is a number.



var newParagraph = document.createElement('p');
newParagraph.id = 'dynamic-item';
newParagraph.textContent = 'Dynamic Item 1';
var containerDiv = document.getElementById('container');
containerDiv.appendChild(newParagraph);
console.log(newParagraph)


//make a new heading after the h1 heading give it content html 

var problem = document.getElementById('header');
var newHeading =document.createElement('h5');
newHeading.innerHTML = '<h5> Hi My Name is Heading 2. </h5>';
problem.appendChild(newHeading)
console.log(problem)

});