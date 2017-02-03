console.log("hello world");

var test = "hey class!";

for(i = 0; i <= 10; i ++) {
  console.log(i);
}


// write a for loop that will iterate from 0 to 20. For each iteration, it will check if the current number is even or odd, and console.log the result (e.g. "2 is even")
for(i = 0; i <= 20; i++) {
  if(i % 2 === 0) {
    console.log(i + " is even");
  }
  else {
    console.log(i + " is odd");
  }
}

// define a variable named myBagOfBeans and set it equal to fifty. loop down from a hundred and if the number is even add the current value to myBagOfBeans.
var myBagOfBeans = 50;

for(i = 100; i > 0; i--) {
  if(i % 2 === 0) {
    myBagOfBeans = myBagOfBeans + i
  }
}

// loop through this array, and seperate the drinks, the food, and the sauces into seperate arrays.
var arrayOfStringsRememberIcanNameMyVariablesAnythingIWant = ['cheese', 'pepperoni', 'sausage', 'coca cola', 'lemonade', 'dough', 'beer', 'wine', 'ranch', 'blue cheese', 'bbq sauce'];

var food = [];
var drinks = [];
var sauces = [];

for(i = 0; i <  arrayOfStringsRememberIcanNameMyVariablesAnythingIWant.length; i++) {
  if(arrayOfStringsRememberIcanNameMyVariablesAnythingIWant[i] === "cheese" || arrayOfStringsRememberIcanNameMyVariablesAnythingIWant[i] === "pepperoni" || arrayOfStringsRememberIcanNameMyVariablesAnythingIWant[i] === "sausage" || arrayOfStringsRememberIcanNameMyVariablesAnythingIWant[i] === "dough") {
    food.push(arrayOfStringsRememberIcanNameMyVariablesAnythingIWant[i]);
  }
  else if(arrayOfStringsRememberIcanNameMyVariablesAnythingIWant[i] === "coca cola" || arrayOfStringsRememberIcanNameMyVariablesAnythingIWant[i] === "lemonade" || arrayOfStringsRememberIcanNameMyVariablesAnythingIWant === "beer" || arrayOfStringsRememberIcanNameMyVariablesAnythingIWant[i] === "wine") {
    drinks.push(arrayOfStringsRememberIcanNameMyVariablesAnythingIWant[i]);
  }
  else {
    sauces.push(arrayOfStringsRememberIcanNameMyVariablesAnythingIWant[i]);
  }
}

// loop through the following array and push the items that are not numbers into a seperate array
var mixedArray = [1, 2, 3, 'taco', 4, 5, 6, 'burrito', 7, 8, 9, 'Whats the deal with airplane peanuts', 3.14, {barry: "Mannilow",}, 6, 55, null, "Old " + "Crow " + " Medicine Show", 3, 2, "I want the calzone from pizanos", "Death blow", "Firestorm", "48", 30];

var newArray = [];

for(i = 0; i < mixedArray.length; i++) {
  if(typeof mixedArray[i] != "number") {
    newArray.push(mixedArray[i]);
  }
}
console.log(mixedArray);
console.log(newArray);

// loop throught the following array and push the items that make up a cheeseburger or spaghetti into a separate array named dinner
var food = ['bun', "jalepeno cheddar", "elk", "beef", "1954 ford mustang", 1.14, 1.23, 'hot dog', "gary clark jr", " I'lll never fall in love again", "mustard", "ketchup", 30, 50, 80, "grilled onions", "egg", "Dr. Suess"]

var dinner = [];

for(i = 0; i < food.length; i++) {
  if(food[i] === "bun" || food[i] === "jalepeno cheddar" || food[i] === "elk" || food[i] === "beef" || food[i] === "mustard" || food[i] === "ketchup" || food[i] === "grilled onions" || food[i] === "egg") {
    dinner.push(food[i])
  }
}
console.log(dinner);

// use a for in loop to loop through the following objects and print the name of each property
var colorObjects = {red: 'red', blue: 'blue', cyan: 'cyan'}

for(key in colorObjects) {
  console.log(key);
}

var seinfeld = {cosmo: "kramer", jerry: "Seinfeld", george: "constanza", elaine: "bennis"}

for(key in seinfeld) {
  console.log(key);
}

var profile = {name: "Elon Musk", occupation: "space man", hobbies: ["paypal", "space X", "rocket science"]}

for(key in profile) {
  console.log(key);
}

// use a for loop or a for in loop and print the properties of the object or value of the index in the array
var oldTime = ["benton flippen", "carter family", "roscoe Holcomb", "gus cannon", "Tommy Jarrell"];

for(i = 0; i < oldTime.length; i++) {
  console.log(oldTime[i]);
}

var sandwhich = {name: "sunday morning special", bread: "ciabatta", cheese: "pepper jack", green: "arugala", redStuff: "cherry tomatoes", heated: true}

for(key in sandwhich) {
  console.log(sandwhich[key]);
}

var zeppelin = ["In through the out door", "Zep 1", "Zep 2", "Zep3", "Zep4", "Physical Graffiti"]

for(i = 0; i < zeppelin.length; i++) {
  console.log(zeppelin[i]);
}

// even or odd up to 20
for(i = 0; i <= 20; i++) {
  if(i % 2 === 0) {
    console.log(i + " is even");
  }
  else {
    console.log(i + " is odd");
  }
}

// FizzBuzz
for(i = 1; i <= 100; i++) {
  if(i % 3 === 0 && i % 5 === 0) {
    console.log("FizzBuzz");
  }
  else if(i % 3 === 0) {
    console.log("Fizz");
  }
  else if(i % 5 === 0) {
    console.log("Buzz");
  }
  else {
    console.log(i);
  }
}

// print the following pattern
//  X
//  XX
//  X.XX
//  XXXX
//  XXXXX
var string = "";
for(x = 1; x <= 6; x++) {
  for(y = 1; y < x; y++) {
    string = string + ("X")
  }
  console.log(string);
  string="";
}

// print keys and print values of the object
var object = {a:1, b:2, c:3};
for(key in object) {
  console.log(key)
}
 for(key in object) {
   console.log(object[key]);
 }

// 99 Bottles of Beer
 for(x = 99; x >= 0; x--) {
   if(x >= 1) {
     console.log(x + " bottles of beer on the wall, " + x + " bottles of beer. Take one down, pass it around, " + (x-1) + " bottles of beer on the wall.")
   }
   else {
     console.log("You have no more bottles of beer.")
   }
 }


// Multiples of 3 and 5
// If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.
//Find the sum of all the multiples of 3 or 5 below 1000.
numbers = 0;
for(i = 0; i < 1000; i++) {
  if(i % 3 === 0 || i % 5 === 0) {
    numbers = numbers + i;
  }
}

// Even Fibonacci Numbers
// Each new term in the Fibonacci sequence is generated by adding the previous two terms. By starting with 1 and 2, the first 10 terms will be:

// 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, ...

// By considering the terms in the Fibonacci sequence whose values do not exceed four million, find the sum of the even-valued terms.
var num1 = 0;
var num2 = 1;
var sum = 0;
var temp;

for(i = 1; i < 100; i++){
  temp = num2 + num1;
  num1 = num2;
  num2 = temp;
  if(num2 % 2 === 0 && num2 < 4000000) {
    sum += num2;
  }
}
console.log(sum);
