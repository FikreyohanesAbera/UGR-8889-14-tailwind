
// let elt = document.getElementById('link__1')
let elts = document.getElementsByClassName('link');
let contentElts = document.getElementsByClassName('content');
contentElts = Array.from(contentElts);
elts = Array.from(elts);
let num = 0;
contentElts.forEach((elt) =>{
  num += 1;
  if (num !== 1){
    
    elt.classList.add('hidden');
  }
  
})

    elts[0].addEventListener('click',()=>{
      if (Array.from(contentElts[0].classList).indexOf('hidden') > -1){
        contentElts[0].classList.remove('hidden');
      }
      contentElts.forEach((linkelt) =>{
        if (!(linkelt === contentElts[0])){
          if (!(Array.from(linkelt.classList).indexOf('hidden') > -1)){
            linkelt.classList.add('hidden');
          }
          
        } 
      }
      )  
    })
    elts[1].addEventListener('click',()=>{
      if (Array.from(contentElts[1].classList).indexOf('hidden') > -1){
        contentElts[1].classList.remove('hidden');
      }
      contentElts.forEach((linkelt) =>{
        if (!(linkelt === contentElts[1])){
          if (!(Array.from(linkelt.classList).indexOf('hidden') > -1)){
            linkelt.classList.add('hidden');
          }
          
        } 
      }
      )  
    })
   
    elts[2].addEventListener('click',()=>{
      if (Array.from(contentElts[2].classList).indexOf('hidden') > -1){
        contentElts[2].classList.remove('hidden');
      }
      contentElts.forEach((linkelt) =>{
        if (!(linkelt === contentElts[2])){
          if (!(Array.from(linkelt.classList).indexOf('hidden') > -1)){
            linkelt.classList.add('hidden');
          }
          
        } 
      }
      )  
    })
    elts[3].addEventListener('click',()=>{
      if (Array.from(contentElts[3].classList).indexOf('hidden') > -1){
        contentElts[3].classList.remove('hidden');
      }
      contentElts.forEach((linkelt) =>{
        if (!(linkelt === contentElts[3])){
          if (!(Array.from(linkelt.classList).indexOf('hidden') > -1)){
            linkelt.classList.add('hidden');
          }
          
        } 
      }
      )  
    })


  




