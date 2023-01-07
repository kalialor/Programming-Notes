//Create a function that takes in a number. Console log all values from 1 to that number, but if the 
//number is divisible by 3 log "fizz" instead of that number, if the number is divisible by 5 log 
//"buzz" instead of the number, and if the number is divisible by 3 and 5 log "fizzbuzz" instead of 
//that number

function fizzBuzz(num) {
    for(let i = 1; i <= num; i++) {
        if(i % 3 === 0 && i % 5 === 0) {
            console.log("FizzBuzz");
        }else if(i % 3 === 0) {
            console.log("Fizz");
        }else if(i % 5 === 0) {
            console.log("Buzz");
            }else {
                console.log(i);
            }
    }
}




//Write a program that uses console.log to print all the numbers from 1-100, with two exceptions. For numbers
//disvisible by 3, print "Fizz" for numbers divisible by 5, print "buzz". When you have that working, modify your 
//program to print "Fizzbuzz" for numbers that are divisible by both 3 and 5 (and still print "Fizz" or 
//Buzz" for numbers divisible by only one of those).



for (let n = 1; n <= 100; n++){
    let output = "";
    if (n % 3 == 0) output += "Fizz";
    if (n % 5 == 0) output += "Buzz";
    console.log(output || n);
}