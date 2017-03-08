// function Get(URL, callback){
//       //when URL responds
//       //callback();
// }

function Map(arr, callback){  //callback multiplies by 3. Expected result is [1,2,3] turns into [3,6,9]
      for (var i = 0; i < arr.length; i++){
            arr[i] = callback(arr[i]);
      }
}
Map([1,2,3], function(n){
      return n*3;
})

/////////////////////////////////////////////
var fs = require('fs'); //fs is a package that returns an object we can call methods from; sometimes a function(rare)
