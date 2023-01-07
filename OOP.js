/* OBJECT

an object is a collection of variables and functions 

variables are called properties 
functions are called methods 

f



*/




//EXAMPLE

function Dog(dogSize, dogBreed, dogHair, dogEyeColor){
    this.dogSize = dogSize               //the value on the right side is the parameter
    this.dogBreed = dogBreed            //the value on the left is the property
    this.dogHair = dogHair              
    this.dogEyeColor = dogEyeColor
    this.bark = function(){
        console.log('WOOOOF!')
    }
    this.run = function(){
        console.log('THIS IS SO MUCH FUN!!!!')
    }
    this.sleep = function(){
        console.log('zzzzzzZZZZZZZzzzzz')
    }
}

let Oliver = new Dog('medium', 'pomsky', 'long haired', 'blue')





//NEW SYNTAX


class Dog{
    constructor(dogSize, dogBreed, dogHair, dogEyeColor){
        this.size = dogSize                  //you can name the value on the right side anything you wnat, just make sure you change it in the parameter      
        this.breed = dogBreed
        this.hair = dogHair
        this. eyeColor = dogEyeColor
    }
    bark(){
        console.log('WOOOOOOOOOFFF!!!')
    }
    run(){
        console.log('THIS IS SO MUCH FUN!!!!!')
    }
    sleep(){
        console.log('zzzzzzzzZZZZZZZZzzzzz')
    }
}let Oliver = new Dog('medium', 'pomsky', 'long haired', 'blue')










//Encapsulation is the process of storing functions (methods) with their associated data
//(properties) in one thing (object)


//What is the reason we use encapsulation?
    //makes code more readable
    //orgainizes code
    //makes it easier to add new stuff
    //makes it so you were not afraid to make changes







//ABSTRACTION is all about hiding the details and showing the essentials
            //-simple, predictable, managable


//Why do we use it?
    //smaller more manageable pieces of code 
    //helps you split the complexity your software project into manageable parts
    //allows you to work on one part without having to affect other parts



    




