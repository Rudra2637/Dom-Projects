
const form=document.querySelector("form");


form.addEventListener('submit',function(e){
  e.preventDefault();
  const height=parseInt(document.querySelector("#height").value);

  const weight=parseInt(document.querySelector("#weight").value);

  const result=document.querySelector("#results")

  if(height <= 0 || weight <= 0 || height === ' ' || weight === ' '){
    result.innerHTML="Enter a valid number";
  }
  else{
    const calculate=(weight / ((height*height)/10000)).toFixed(2);
    if(calculate <= 18.6){
      result.innerHTML = `<span>${calculate+" Under Weight"}</span>`;
    }
    else if(calculate >= 18.6 && calculate <= 24.9){
      result.innerHTML = `<span>${calculate+" normal Weight"}</span>`;
    }
    else{
      result.innerHTML = `<span>${calculate+" OverWeight"}</span>`;
    }
  }
  
});
