let greenbtn=document.getElementById('greenbtn');
let redbtn=document.getElementById('redbtn');
let bluebtn=document.getElementById('bluebtn');
let pinkbtn=document.getElementById('pinkbtn');

let container=document.getElementById('container');

let subContainer=document.getElementById('subContainer');

//this is for border div
let changeborder=document.querySelector('.border');

//resultContainer div
let resultContainer=document.getElementById('resultContainer');

//answer container
let answers=document.getElementById('answer');

//all buttons
let themeButtons = document.querySelectorAll('.btn');


greenbtn.addEventListener('click',function(){
  document.body.style.backgroundImage='url(images/greenVegetation.jpeg)';
  
  subContainer.style.backgroundImage='url(images/greenVegetation.jpeg)';

  container.style.borderColor='#21ed21';
  
  changeborder.style.setProperty(
    '--border-color','#21ed21'
  );

  //changing resultContainer borderColor
  resultContainer.style.borderColor='#21ed21';
  //changing answer color
  answers.style.color='#21ed21';
 
  //btn color;
  themeButtons.forEach(button=>
    { button.style.borderColor='#21ed21';
      
     button.style.setProperty(
       '--bg-color','#21ed21'  
     );
      
      button.style.setProperty(
      '--shadow-color','#21ed21'
    )
    }
  
  );
  
});

redbtn.addEventListener('click',function(){
  
  container.style.borderColor='red';
  
  document.body.style.backgroundImage='url(images/redBackground.jpeg)';
  
  subContainer.style.backgroundImage='url(images/redBackground.jpeg)';
  
  //this changes the rotating border color
  changeborder.style.setProperty(
    '--border-color','red'
  );
  
  //changing resultContainer borderColor
  resultContainer.style.borderColor='red';
  //changing answer color
  answers.style.color='red';
 
  //btn color;
  themeButtons.forEach(button=>
    { button.style.borderColor='red';
      
     button.style.setProperty(
       '--bg-color','red',
     );

    button.style.setProperty(
      '--shadow-color','red'
    );
      
    }
  
  );
  
  
});

bluebtn.addEventListener('click',function(){

  
  
  document.body.style.backgroundImage='url(images/darkblueBg.jpg)';

  subContainer.style.backgroundImage='url(images/darkblueBg.jpg)';

  changeborder.style.setProperty(
    '--border-color','#1c68c5cc'
  );

  container.style.borderColor='#1c68c5cc';
  
  //changing resultContainer borderColor
  resultContainer.style.borderColor='#1c68c5cc';
  //changing answer color
  answers.style.color='#0316a4';
 
  //btn color;
  themeButtons.forEach(button=>
    { button.style.borderColor='#1c68c5cc';
      
     button.style.setProperty(
       '--bg-color','#1c68c5cc'
     );
      

    button.style.setProperty(
      '--shadow-color','#1c68c5cc'
    );
    }
  );
});

  
pinkbtn.addEventListener('click',function(){
  
  subContainer.style.backgroundImage='url(images/pinkf3.jpeg)';
  
  document.body.style.backgroundImage='url(images/pinkf3.jpeg)';
  
  changeborder.style.setProperty(
    '--border-color','#f4264cc6'
  );

  container.style.borderColor='#f4264cc6';

//changing resultContainer borderColor
  resultContainer.style.borderColor='#f4264cc6';
  //changing answer color
  answers.style.color='#f4264cc6';
 
  //btn color;
  themeButtons.forEach(button=>
    { button.style.borderColor='#f4264cc6';
      
     button.style.setProperty(
       '--bg-color','#f4264cc6'
     );

    button.style.setProperty(
      '--shadow-color','#f4264cc6'
    );
    }
  )
  
  
});