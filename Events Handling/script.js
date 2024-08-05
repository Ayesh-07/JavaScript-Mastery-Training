// Event Handling Through JavaScript      It has higher piority than inline Event Handling.

// inline Event Handling

// Event Listeners Handling





// Event Handling Through JavaScript  

var Btn1 = document.querySelector('#btn1');
Btn1.onclick = ()=>{

    console.log(' Boss ! You Clicked Me. 😂 ')

    let a = " Lovely 😍";
    console.log(a)
   

}


// Event Object 

var Btn3 = document.querySelector('#btn3');
Btn3.onclick = (e)=>{

  console.log(' Boss ! You Clicked Me 3x. 😂 ')

  alert('Hello Ayesh 🌟');
  console.log(e)
  console.log(e.type)
  console.log(e.target)
  console.log(e.clientX , e.clientY)
   

}



// Event Listeners


var Btn4 = document.querySelector('#btn4');
Btn4.addEventListener("click" , (e)=>{

  console.log(' Ayesh ! You Clicked Me 3x. 😀😀😀 ')

  alert('Hello Ayesha 🎉 🌟');
  console.log(e)
  console.log(e.type)
  console.log(e.target)
  console.log(e.clientX , e.clientY)});

  //-------------------------------------------
   
  Btn4.addEventListener("click" , (e)=>{

    console.log(' Ayesh !   Are you good . 😍😍😍😍 ')
  
    alert('Hello Ayesha  Nudrat 🎉 🌟');});

  //--------------------------------------------------

    
    var Btn5 = document.querySelector('#btn5');

    Btn5.addEventListener("click" , (e)=>{

        console.log(' Do you Like Dog 🐶')
      
        alert('Hello Dogs Lovers 🎉 🌟');});

  
  
  // -------------------------------------------------



    var Btn6 = document.querySelector('#btn6');

    var FUNC = (e)=>{ console.log(' Do you Like Cats 🐱  ') ; alert('Hello Cats Lovers🎉 🌟');};
     
    Btn6.addEventListener("click" , FUNC);

    
  //----------------------------------------------

 // Remove Event Listeners

  var Btn7 = document.querySelector('#btn6');

  var FUNC = (e)=>{ console.log(' Do you Like Cats 🐱  ') ; alert('Hello Cats Lovers🎉 🌟');};
  Btn7.removeEventListener("click" , FUNC);

    