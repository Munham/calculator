let input = document.getElementsById('inputBox')
let buttons = document.querySelectorAll('button')

let String = "";
let arr = Array.from(buttons);
arr.forEach(button => {
    button.addEventListener('click', (e) =>{
       if(e.target.innerHTML == '='){
        string = eval(string);
        input.value = string;
       }
       else if(e.target.innerHTML == 'AC'){
        string = "";
        input.value = string;
       }
       string += e.target.innerHTML;
       input.value = string; 
    })
})