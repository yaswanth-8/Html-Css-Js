var testClosure = function(){
  var counter = 1;
  return function() {
    return counter += 1;
  }
};
var add = testClosure();
add();
add();
//console.log(add());


var printValueArr = [];
for(var i=0; i< 10 ; i++){
  var captureValue = function(value){
    return function(){
      console.log(value);
    }
  }
  
  printValueArr.push(captureValue(i));
}
printValueArr[0]();
printValueArr[5]();
printValueArr[8]();

