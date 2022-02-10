const  Btnprevious  =  document.getElementById('Previous');
const  Btnnext  =  document.getElementById('Next');
const  Btnsubmit  =  document.getElementById('Submit');
const  bullets  =  [...document.querySelectorAll('.bullets')];

let current = 0;
const max = 2;

Btnprevious.style.display  =  'none';
Btnsubmit.style.display  =  'none'; 

Btnnext.addEventListener('click',  ()  =>  {
    bullets[current].classList.add('completed');
    current  +=  1;
    Btnprevious.style.display  =  'inline';
    if  (current  ===  max)  {
        Btnnext.style.display  =  'none';
        Btnsubmit.style.display  =  'inline';
    }
}); 

Btnprevious.addEventListener('click',  ()  =>  {
    bullets[current  -  1].classList.remove('completed');
    current  -=  1;
    Btnsubmit.style.display  =  'none';
    Btnnext.style.display  =  'inline';
    if  (current  ===  0)  {
        Btnprevious.style.display  =  'none';
    }
}); 

Btnsubmit.addEventListener('click',  ()  =>  {
    location.reload();
}); 
