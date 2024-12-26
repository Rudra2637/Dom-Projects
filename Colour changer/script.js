const button = document.querySelectorAll('.button');
const body = document.querySelector("body");

button.forEach((item)=>{
 
  item.addEventListener('click',function(e){
    
    const store=e.target.id;
    if(store === 'grey'){
      body.style.backgroundColor=e.target.id;
    }

    if(store === 'red'){
      body.style.backgroundColor=e.target.id;
    }

    if(store === 'blue'){
      body.style.backgroundColor=e.target.id;
    }

    if(store === 'yellow'){
      body.style.backgroundColor=e.target.id;
    }

    if(store === 'white'){
      body.style.backgroundColor=e.target.id;
    }

  })
});
