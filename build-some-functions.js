//#1 - Make a function that can be used anywhere in your file and that when invoked will console.log('I am running!'); Give it the name runningLogger.
function runningLogger(){
      console.log("I am running!")
}

//#2 - Make a function that is callable, has one parameter and multiplies the value of the parameter by 10 before returning the result. Give it the name multiplyByTen. Invoke it, passing it the argument 5.
function multiplyByTen(number){
      console.log(number*10)
}
multiplyByTen(5);

//#3 - Write two functions (stringReturnOne and stringReturnTwo) that each return a different hard-coded string
function stringReturnOne (){
      console.log("I love coding!")
}
stringReturnOne();

function stringReturnTwo(){
      console.log("I love Ruby!")
}
stringReturnTwo();

//#4 - Write a function named caller that has one parameter. If the argument provided to caller is a function (typeof may be useful), invoke the argument. Nothing is returned.
function caller(param1){
      if (typeof(param1)=='function'){
            param1();
      }
}

//#5 - Write a function named myDoubleConsoleLog that has two parameters, if the arguments passed to the function are functions, console.log the value that each, when invoked, returns.
function myDoubleConsoleLog(param1,param2){
  if (typeof(param1) == 'function' && typeof(param2) == 'function'){
    console.log(param1(), param2());
  }
}
myDoubleConsoleLog(stringReturnOne(), stringReturnTwo());

//#6 - Write a function named caller2 that has one parameter. Have it console.log the string 'starting', wait 2 seconds, and then invokes the argument if the argument is a function. (setTimeout may be useful for this one.) The function should then console.log ‘ending?’ and return “interesting”. Invoke this function by passing it myDoubleConsoleLog.
function caller2(param1){
      console.log("starting")
      var x = setTimeout(function(){
            if (typeof(param1) == 'function'){
                  param1(stringReturnOne(), stringReturnTwo());
            }
      }, 2000);
      console.log('ending');
      return "interesting";
}
caller2(myDoubleConsoleLog);
