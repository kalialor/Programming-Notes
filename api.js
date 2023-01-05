/* API

an API is an Application Program Interface

A simple interface for some complex action

Think of a restaurant menu. The menu is the interface. A light switch is a interface.

In software development, the interface is the URL. We tell the URL to make a request. The server 
'cooks' something up and responds back with files called, 'JSON'. JSON stands for 
'JavaScript Object Notation.'

//READ THE DOCUMENTATION 
//The documentation will tell you what to do to get that data back



FETCH TEMPLATE

*/

//CLASS 26
//DOG CEO

fetch("https://dog.ceo/api/breeds/image/random")
    .then(res => res.json()) // parse response as JSON
    .then(data => {
        console.log(data.message)
        document.querySelector('img').src = data.message
    })
    .catch(err => {
        console.log(`error ${err}`)
    });















//ANOTHER EXAMPLE 
//CLASS 26


//The user will enter a cocktail. Get a cocktail name, photo, and 
//instructions and place them in the DOM
//The s in the query parameter stands for search




document.querySelector('button').addEventListener('click', getDrink)

function getDrink(){
    let drink = document.querySelector('input').value

fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${drink + ''}`)   //<---query parameters
    .then(res => res.json()) // parse response as JSON
    .then(data => {
        console.log(data.drinks[0])
        document.querySelector('h2').innerText = data.drinks[0].strDrink
        document.querySelector('img').src = data.drinks[0].strDrinkThumb
        document.querySelector('.instructions').innerText = data.drinks[0].strInstructions
        document.querySelector('#glass').innerText = data.drinks[0].strGlass

    })
    .catch(err => {
        console.log(`error ${err}`)
    });
}



/*
look in the console for the drinks array. just grab a random array number 
in this case we chose [0]

if you want to be able to type in any drinks then change from margarita
in the url to `${drink}`

you have to put the whole thing in a function to be able to make it responsive

DO NOT FORGET ABOUT THE ADDEVENTLISTENER ON TOP

*/













//ANOTHER EXAMPLE
//CLASS 26
//NASA



//The user will enter a date. Use that date to get the NASA picture 
//of the day from that date! https://api.nasa.gov/

document.querySelector('button').addEventListener('click', nasa)

function nasa(){
   const choice = document.querySelector('input').value
    //console.log(choice)
    const url = `https://api.nasa.gov/planetary/apod?api_key=vZLhWq9WeOTw0UvyNJfw1dZwRFg1sBBxYVkQGyjk&date=${choice}`


fetch(url)
    .then(res => res.json())
    .then(data => {
        console.log(data)
        if(data.media_type === 'image'){
            document.querySelector('img').src = data.hdurl
        }else if(data.media_type === 'video'){
            document.querySelector('iframe').src = data.url
        }

       
       document.querySelector('.explanation').innerText = data.explanation

    })
.catch(err => {
    console.log(`error ${error}`)
});
    }











//CARD GAME 
//class 27

let deckId = ''


//this is how you get the deck from the server, see json
//on page load, it runs and gets me a deck of cards


fetch('https://www.deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1')
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data)
        deckId = data.deck_id  //we store the id we got from deck in a global variable called deckId
      })
      .catch(err => {
          console.log(`error ${err}`)
      });




//whenever we click, our game is going to run. we can use the id we got from 
//page load and draw 2 cards   /draw/?count=2

document.querySelector('button').addEventListener('click', drawTwo)


//the set of instructions

function drawTwo(){
  const url = `https://www.deckofcardsapi.com/api/deck/${deckId}/draw/?count=2`
  


fetch(url)
    .then(res => res.json())
    .then(data => {
        console.log(data)
        document.querySelector('#player1').src = data.cards[0].image
        //you get the data back. it has a cards property. you are going to grab the 
        //first card from the array [0], and grab the image property
        document.querySelector('#player2').src = data.cards[1].image

        let player1Val = convertToNum(data.cards[0].value) //every value will convert to num convertToNum
        let player2Val = convertToNum(data.cards[1].value)

        if(player1Val > player2Val){
            document.querySelector('h3').innerHTML = 'Player 1 Wins'
        }else if(player1Val < player2Val){
            document.querySelector('h3').innerHTML = 'Player 2 Wins'
        }else{
            document.querySelector('h3').innerHTML = 'Time for War!'
        }
    })

    .catch(err => {
        console.log(`error ${err}`)
    });

}


//Turns the face cards into values 




function convertToNum(val){
    if(val === 'ACE'){
        return 14
    }else if(val === 'KING'){
        return 13
    }else if(val === 'QUEEN'){
        return 12
    }else if(val === 'JACK'){
        return 11
    }else{
        return Number(val)
    }
}