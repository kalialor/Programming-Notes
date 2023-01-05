//Arrays



//how to print our elements in an array

const poohBear = ['a', 'b','c', 'd']

console.log(poohBear[2])


//how to get the length of an array

console.log(poohBear.length)


//how to push something to the end of an array

poohBear.push('e')
poohBear.push(3)


//how to push an array into another array. a nested array

poohBear.push([1,2])





//example 2
//say you wanted to grab b from the array 
///the 'first' array is in position 0 
//b is in the 1 position

const tigger = [['a', 'b', 'c', 'd'], [1,2]] 

console.log(tigger[0][1])



//you can also change the element in an array

tigger[0] = apple      //prints out [apple, b, c, d], [1,2]














//ARRAY METHODS




//Filter Method

//say you wanted to get all the items that were <= 100, so you would use the 
//filter method to filter out everyting greater than 100


const items = [
    { name: 'Bike',      price: 100},
    { name: 'TV',        price: 200},
    { name: 'Album',     price: 10},
    { name: 'Book',      price: 5}, 
    { name: 'Phone',      price: 500}, 
    { name: 'Computer',      price: 1000}, 
    { name: 'Keyboard',      price: 25}
]


const filteredItems = items.filter((item) => {
    return item.price <= 100
})

console.log(filteredItems)  //so it would print out bike, album, book, & keyboard








//Map Method


//allows you to take one array and convert it to a new array, so all the items will 
//look different


const itemNames = items.map((item) => {
    return item.name
})

console.log(itemNames)   //prints out only the names




const itemPrice = items.map((item) => {     //item is the parameter
    return item.price
})

console.log(itemPrice)    //prints out only the price





//Find method

//allows you to find things in an array


const foundItem = items.find((item) => {
    return item.name === 'Book'
})

console.log(foundItem)










//For Each

//takes place of for loop syntax for arrays. it makes it a lot easier

items.forEach((item) => {
    console.log(item.price)
})




//ANOTHER EXAMPLE 
//takes the item & the index. console.log the item
//used when working with APIs. we are going to loop through the array and get data back
//and append them to the DOM


let bestColors = ['green', 'blue', 'yellow', 'orange']

bestColors.forEach((x,i) => console.log(x))












//Some Function


//check if something is true or false 

//check if the array has something for <= 100  (less than or equal to 100)


const hasInexpensiveItems = items.some((item) => {
    return item.price <= 100
})

console.log(hasInexpensiveItems)






//Every Function

//instead of checking for one item, it checks if every item falls under 
//the condition


const hasInexpensiveItems = items.every((item) => {
    return item.price <= 100
})

console.log(hasInexpensiveItems)





//Reduce Method

//Doing operation on the array 

//get the sum of the items


const total = items.reduce((currentTotal, item) => {    //you want currentTotal to be the first parameter then item
    return item.price + currentTotal
}, 0)      //starting point. we want to start the total at 0.

console.log(total)    //total will be 1840





//Includes Method

//checking to see if array inclues the argument or the thing you are passing in


const cat = [1, 2, 3, 4, 5]

const includesTwo = items.includes(2)

console.log(includesTwo)   //prints out true


const includesTwo = items.includes(7)

console.log(includesTwo)    // prints out false