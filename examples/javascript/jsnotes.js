//JavaScript notes
  //history: started by Netscape, was written in 10days
  //rec. reading: "Javascript: the good parts"
  //ECMA: standards body for programmung language
//strings

var myString = "this is a string"
myString.length
myString.split(" ");
myString.charAt(0);

//numbers

 4

//object
var myObject= {};

  var = {};

  var = {
    hello: "hello",
    goodBye: "goodbye"
  };
// variables

var myValue //declaration
var myValue = someValue //assigns value to declared variable

// functions

function sum(arguments) {
  //body of the function makes shit happen
}

var sum = function () {};
var sum = function sum() {};

//execute a function
sum();

// arrays

var myArray = [0,1,2,3];

// variables
// booleans
// control flow
// loops/iteration

example:
function clock() {
  var dt = new Date();
  var h = dt.getHours();
  var m = dt.getMinutes();
  var s = dt.getSeconds();

  var time = h + ";" + m +";" + s;
  console.log(time);
  setTimeout(clock, 1000); //will cause it to run infinitely
}
//
var myArr = [1,3, "string", "true"]


myArr.forEach(function(item) {
console.log("each item" + item);
});


// While Loop
var i = 0

while(i< 10) {
  console.log("it's getting warm", i);
  i++
}

//switch statements

switch(pet) {
  default:
    console.log("no pets");
    break;
}
