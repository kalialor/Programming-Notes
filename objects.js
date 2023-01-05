/* OBJECT

an object is a collection of variables and functions 

variables are called properties 
functions are called methods

*/





//EXAMPLE

function Dog(dogSize, dogBreed, dogHair, dogEyeColor){
    this.dogSize = dogSize               //the value on the right side is the parameter
    this.dogBreed = dogBreed
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

