// Loops


/* For Loop

syntax: 


for (initialization; condition; final expression){
    console.log()
}


initialization-only happens once, when the code first kicks off. It is often
used to set the initial value of the variable associated to the loop condition.
how many times the loop runs


condition-is evaulated once before the loop runs each time. If it's true, the code runs.
If not, the code does not run.


finial expression-is evualatied after the loop runs each time. It is often used to update the value
of the variable associated with the loop condition






Example:
i stands for index */


for (i = 1; i < 5; i++) {
    console.log(i)
}                                   //prints out: 1, 2, 3, 4





//Example:

for(number = 2; number >= 5; i++){
    console.log(number)
}                               //prints out: 6, 7, 8, 9, and so on....




//Example: 

for (let i = 5; i > 0; i--){
    console.log(i)
}                               //prints out: 5, 4, 3, 2 1




//using a break:
//example:

for (let i = 0; i < 5; i++){
    console.log(i)
    if (i === 3) break; 
} 
                     //prints out 0, 1, 2, 3






//Example:

const names = ['john', 'bob', 'mary', 'joe'];   

for(let i = 0; i < names.length; i++){
    console.log(names[i]);                      //prints out john, bob, mary, joe
}












/* While Loop: 
Declares index outside of the loop


if the condition value is TRUE, the code in the while loop body runs. Afterwords, the 
condition is re-evaluated to see if it's still true or not. 

The loop keeps entering that statement as long as the expression produces a value that gives true.

if the condition is FALSE, the code in the loop stops running or doesn't run. 


use while loops when you don't know how many times the loop should run. */



//Example: 


let count = 1; 

while(count <= 5){
    console.log(count);
    count ++;
}


//prints out: 

//1
//2
//3
//4
//5




//using continue:

let i = 0;

while(i < 10) {
    i++;
    if (i === 5) continue;
    console.log(i);
}

/*
prints out

1
2 
3
4
6
7
8
9
10


-no 5 because it stops the first loop and starts a new loop. it's like a break
-continue stops the current loop and starts back up with the new loop   */














/* Do While Loop

always executes its body at least ONCE, then loop based on a specific condition after its 
initial run.


do...while loops says to do a task ONCE then keep doing it until a specified condition is no 
longer met    */



//Example: 


let i = 0;

do {
    i++;
    if(i === 5) continue;
    console.log(i);
} while(i < 0);


//prints out 1     because even though 1 is < 0, the do statement runs once 















