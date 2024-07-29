

// Selecting Elements

var parah = document.getElementsByTagName('p')
console.dir(parah);

let heading = document.getElementsByClassName('heading');
console.dir(heading);

let heading2 = document.getElementById('myid');
console.dir(heading2);

let heading3 = document.querySelector('#myid')
console.dir(heading3);

let heading4 = document.querySelector('.heading');
console.dir(heading4);

let heading5 = document.querySelectorAll('p');
console.dir(heading5);

//------------------------------------------------------------------------------------------------------------------

// changing / updating the content

// Text Content:   element.innerText 
var parah = document.getElementsByTagName('p')[0].innerHTML = "My name is Ayesha";
console.log(parah);

//------------------------------------------------------------------------------------------------------------

//element.innerHTML

var parah = document.getElementsByTagName('p')[0].innerHTML = "<h1>'My name is Ayesha'</h1>";
console.log(parah);

//-------------------------------------------------------------------------------------------------------------

//element.innerHTML

var parah = document.getElementsByTagName('p')[0].textContent = "My name is Ayesha";
console.log(parah);


//---------------------------------------------------------------------------------------------------------------


//  Styles  Setting Inline Styles:

var STYLE = document.querySelector('#myElement');
console.dir(STYLE);
console.dir(STYLE.style);
var bg = STYLE.style.backgroundColor = "green";
console.dir(bg);
console.dir(STYLE.style.fontSize ="20px");
console.dir(STYLE.innerText="I'm Ayesha Nudrat");


// Add Class:

var addClass = document.querySelector('#myElement');
  addClass.classList.add('myClass');

console.dir(addClass)

addClass.classList.toggle('myClass')
console.dir(addClass)

addClass.classList.remove('myClass')
console.dir(addClass)

addClass.classList.contains('myClass')
console.dir(addClass)

//-----------------------------------------------------------------------------------------------------------------


// 2. Attributes

var addClass = document.querySelector('img');

// element.getAttribute('attr')

addClass.getAttribute('src')
console.dir(addClass);

// element.setAttribute('attr', 'value')

addClass.setAttribute('src' , 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNu30BamO_jUYLHxyZRykyk7LwDdZ86DlKZg&s')


// element.removeAttribute('attr')

addClass.removeAttribute('src' , 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNu30BamO_jUYLHxyZRykyk7LwDdZ86DlKZg&s')


// -------------------------------------------------------------------------------------------------------------------

//  for inserting first we have to create elements 

var NEW = document.createElement('button');
NEW.innerText = 'click me !';
console.log(NEW);

var addClass = document.querySelector('#myElement');
// addClass.prepend(NEW);

//addClass.before(NEW);

addClass.after(NEW);

//------------------------------------------------------------------------------------------------------------

addClass.remove(NEW)
NEW.remove('button')
STYLE.remove(bg)

