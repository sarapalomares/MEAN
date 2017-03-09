//Problem 1
var first_variable = "Yipee I was first!";
function firstFunc() {
  first_variable = "Not anymore!!!"; //this never runs
  console.log(first_variable);
}
console.log(first_variable);

//Problem 2
var food; //declare the variable as global, outside the function scope
function eat() {
  food = "half-chicken";
  console.log(food);
  var food = "gone";
  console.log(food);
}
food = "chicken";
eat();
console.log(food);

//Problem 3
var new_word;
function lastFunc() {
  new_word = "old";
  console.log(new_word);
}
lastFunc(new_word);
new_word = "NEW!";
console.log(new_word);
