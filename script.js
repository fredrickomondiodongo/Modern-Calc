let outputDisplay=document.getElementById('outputDisplay');

let answer=document.getElementById('answer');

let buttons = document.querySelectorAll('.btn');

let clear= document.getElementById('clear');



let isEqual= document.getElementById('isEqual');

let deleting = document.getElementById('deleting');


//let historyArray=[];

let percent=document.getElementById('percent');



function displayChars(){
  
  percent.addEventListener('click',function(){
   let num=Number(outputDisplay.value)/100;
    
  const promise=new Promise((resolve,reject)=>
    {
      if(isNaN(num)|| outputDisplay.value==0){
        reject('');
      }else{  
        resolve(num)
      }
    })
    
   promise.then(result=>{
      outputDisplay.value=result
    })
    .catch(error=>{
      outputDisplay.value=error;
    });

    
   /* let isErr=false;
    try{
     outputDisplay.value=Number(outputDisplay.value)/100
      
    }catch(error){
      error='Invalid'
      outputDisplay.value=error;
     isErr=true;
    }
    if(isErr===false){
      outputDisplay.value=error;
      isErr=false;
    }*/
  });

  buttons.forEach(button=>{
   button.addEventListener('click',function(){
     
  //here handles which button content not to be displayed   
  if(button.textContent ==='x'){
    outputDisplay.value+='*';
  }
  else if(button.textContent ==='÷'){
    outputDisplay.value+='/';
  }
     
  else if(button.textContent !== 'Del' && button.textContent !== '=' &&button.textContent!=='%'){
   outputDisplay.value+=button.textContent;
  }
     
   });
  });
  
}




function clearDisplay(){
  clear.addEventListener('click',function(){
    outputDisplay.value='';
    answer.textContent='';
  });
};




function deletefunc(){
  deleting.addEventListener('click',function(){
    outputDisplay.value=outputDisplay.value.slice(0,-1);
  })
};



function calculateValues(){
  isEqual.addEventListener('click',function(){
    let hasError=false;

   try {
  //Number removes unnecesary decimals lets say if a number is divisible.
  answer.textContent =Number(eval(outputDisplay.value).toFixed(2));
 }
 catch(error) {
  
  hasError=true;
 }
 if(hasError===true){
   answer.textContent='Invalid';
   hasError=false
 }  
    
  })
}
displayChars();
clearDisplay();
deletefunc();
calculateValues();

//color and background changes
