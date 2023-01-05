/*Local Storage 

Local storage is an API. It allows you to store data across broswer sessions 



*/














//EXAMPLE

//Create a button that adds 1 to a botScore stored in localStorage 

if(!localStorage.getItem('botScore')){   //if there's a botScore
    localStorage.setItem('botScore', 0)  // <-----everytime the page loads, 
    //we set the score to zero
}




document.querySelector('button').addEventListener('click', addAnothaOne)  // <----everytime you click, the function runs

function addAnothaOne(){
    let botScoreVal = Number(localStorage.getItem('botScore')) // <---if there's a botScore in local value, it's going to store it in botScoreVal
    botScoreVal += 1    //adds one to the variable
    localStorage.setItem('botScore', botScoreVal) //the the computer resets the value to whatever it was plus one

}



