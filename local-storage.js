/*Local Storage 

Local storage is an API. It allows you to store data across broswer sessions 

(key,value) <----so type of item, & value


Put item into Local Storage: 
localStorage.setItem('bestFriend', 'Bob')


Get Items Out of Local Storage:
localStorage.getItem('bestFriend', 'Bob')


Remove Items In Local Storage:
localStorage.removeItem('bestFriend', 'Bob')


Remove All In Local Storage:
localStorage.clear()








How to check local storage: 

Go to Developer Tools and Application tab


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














//ANOTHER EXAMPLE
//BOOK TRACKER 
//CLASS 28






document.querySelector('button').addEventListener('click', getFetch) //when you click the function runs
document.querySelector('h3').innerText = localStorage.getItem('books')//page load. we are grabbing whatever is in 
//local storage with the key of 'books' on page load. we are going to put it into the DOM



function getFetch(){
  const isbn = document.querySelector('input').value     //when they click the button, it get the value out of the input 
  const url = `https://openlibrary.org/isbn/${isbn}.json` //we are plugging the value in the url

  fetch(url)                       //using fetch to get the url
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data)


        //if there's nothing in the book key in local storage, we would get null.
        //if it's false, then we need to put something into local storaage
        //

        if(!localStorage.getItem('books')){
          localStorage.setItem('books', data.title)
        }else{
          let books = localStorage.getItem('books') + " ; " + data.title
          localStorage.setItem('books', books)

        }




         //get all of the books that are in local storage
         //concatane the new title 
        let books = localStorage.getItem('books') + " ; " + data.title


        //updating local storage
        localStorage.setItem('books', books)


        //put items into localStorage
        //localStorage.setItem('books',data.title)
        //plugging whatever is in local storage into the DOM
        document.querySelector('h3').innerText = localStorage.getItem('books')
    

        


      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}


