//////////////Functions/////////////////
//a machine that performs a specific task. takes inputs--> outputs.
var doMath = function (a, b) {
  return a + b;
};
//side effects: function prints text to screen
console.log(doMath(2, 3));

//////global variable/////
//Global variables that are declared outside of function. function can use global variables
var favNum = 5;
var double = function (x) {
  x = x * 2;
  return x;
};
console.log(double(favNum)); //5

//local variables////
//Variables declared within a JavaScript function, become LOCAL to the function.
var multiply = function (x, y) {
  var result = 0;
  result = x + y;
  return result;
};

console.log(multiply(3, 4));

///////SCOPE//////////
//global scope

//local scope

////////nested scope/////
//functions can be created inside functions
var num1 = 20,
  num2 = 3,
  name = "Thu";

function getScore() {
  var num1 = 5;
  num2 = 3;

  function add() {
    return name + " scored " + (num1 + num2);
  }
  return add();
}
console.log(getScore());

//////function expression /////
//used as an expression
var foo = function (x) {
  //this is called function expression
};

// foo(x);

//////function declaration////
//: must begin with function
function foo(x) {
  // This is called function declaration.
  //A declared function is “saved for later use”, and will be executed later
}
// foo(x);

//////scope/////

////////////ARRAY/////////
// an ordered list that store data types. values can be any types of data: boolean, number, string, array etc
//counting from 0

//
const myArray = ["one", "two", "three", true, 34, [1, 2, 3, false]];

//access to items in array
console.log(myArray[0]); //one
console.log(myArray[1]); //two

console.log(myArray[3]); //true

//get array length
console.log(myArray.length); //5

//target an item inside array
console.log(myArray[5][3]); //false

///example
const googleSearchResults = [
  "Harry Potter",
  "Eloquent Javascript",
  "Arrays - Tutorial",
];

const myTrolley = [268, 168, 99];
const myTrolleyTotal = myTrolley[0] + myTrolley[1] + myTrolley[2];
console.log(myTrolleyTotal);
