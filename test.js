function stringReturnOne (){
      console.log("I love coding!")
}

function caller(param1){
      if (typeof(param)=='function'){
            param();
      }
}
caller(stringReturnOne);
