var arr = [1,2,3,4];
function forEach(arr,func){
for(var i=0 ; i<arr.length;i++){
func(arr[i]);
}
}
function increment(num){
return num+1;
}
function getTransformedArray(arr,func){
var newarr = [];
forEach(arr,function(num){newarr.push(func(num))});
console.log(newarr);
return newarr;
}
getTransformedArray(arr,increment);