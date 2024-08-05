

// Mouse Events 


// click: Triggered when the mouse button is clicked on an element.
// dblclick: Triggered when the mouse button is double-clicked on an element.
// mousedown: Triggered when the mouse button is pressed down on an element.
// mouseup: Triggered when the mouse button is released over an element.
// mousemove: Triggered when the mouse pointer is moved within an element.
// mouseover: Triggered when the mouse pointer is moved onto an element.
// mouseout: Triggered when the mouse pointer is moved out of an element.
// contextmenu: Triggered when the right mouse button is clicked (usually opens a context menu).



var box = document.querySelector('.box1');

box.addEventListener('click' , () => { 
    alert(' Ayesha you did signle Click !');
    console.log('How are you Ayesha! 😍')
    box.style.backgroundColor = 'lightblue';


});


box.addEventListener('dblclick' , () => {

    alert('Ayesha you did Double Click !');
    console.log('😇 Smiling Face with Halo')
   box.style.backgroundColor = 'lightgreen';


});


// box.addEventListener('mousedown' , () => {

//     alert('Ayesha you did mousedown !');
//     console.log('😄 Grinning Face with Smiling Eyes')
//     box.style.backgroundColor = 'orangered';

// });


box.addEventListener('mouseup' , () => {

    alert('Ayesha you did mouseup !');
    console.log('🙃 Upside-Down Face')
    box.style.backgroundColor = 'peru';

});



// box.addEventListener('mouseover' , () => {

//     alert('Ayesha you did mouseover !');
//     console.log('😓 Downcast Face with Sweat')
//     box.style.backgroundColor = 'palegreen';


// });


// box.addEventListener('mouseout' , () => {

//     alert('Ayesha you did mouseout !');
//     console.log('🙄 Face with Rolling Eyes')
//     box.style.backgroundColor = 'purple';



//});


box.addEventListener('contextmenu' , () => {

    alert('Ayesha you did contextmenu !');
    console.log('😰 Anxious Face with Sweat')
    box.style.backgroundColor = 'red';



});




// keyboard Events 

// keydown: Fired when a key is pressed down.
// keyup: Fired when a key is released.
// keypress: Fired when a key that produces a character value is pressed down. 




var myForm = document.getElementById('name');
myForm.addEventListener('keydown', function(event) {
document.getElementById('container').style.background = this.value;
});


var myForm = document.getElementById('email');
myForm.addEventListener('keyup', function(event) {
document.getElementById('container').style.background = this.value;
});


var myForm = document.getElementById('message');
myForm.addEventListener('keypress', function() {
document.getElementById('container').style.background = this.value;
});

// Window EVENTS 


function openWindow(){

    window.open("https://www.google.com/" , " " ,"width = 500px , height = 500px , left = 200px , top = 400px" )
    console.log("window open");
}


function closeWindow(){

    window.close("https://www.google.com/" , " " ,"width = 500px , height = 500px , left = 200px , top = 400px" )
    console.log("window open");
}




window.addEventListener('load', function() {
  document.body.style.backgroundColor = 'peru';
  });
  