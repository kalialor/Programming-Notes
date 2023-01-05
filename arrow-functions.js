//ARROW FUNCTIONS

/* in arrow function, the function keyword is assumed. the sum function needs to be 
assigned to a varible, so call it sum2. you need to create your own varible to store
the function. The aroow takes place of the brackets & return keyword.*/


function sum(a,b){
    return a + b
}

let sum2 = (a,b) => a + b



//Example 2
//RULE:  if there is only one parameter, you can take away the parenthesis
//anything to the left of the arrow function is the argument
//anything to the right of the arrow function is the thing you are returning


function isPositive(number){
    return number >= 0
}



let isPositive2 = number => number >= 0 




//Example 3


function randomNumber() {
    return Math.random
}


let randomNumber2 = () => Math.random




//Example 4 


document.addEventListener('click', function(){
    console.log('Yeet!')
})


document.addEventListener('click', () => console.log('Yeet!'))




