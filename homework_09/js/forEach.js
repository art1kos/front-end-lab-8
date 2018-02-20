function forEach(arr,func){
for(var i=0 ; i<arr.length;i++){
func(arr[i]);
}
}
var arr = [1,2,3,4];
forEach(arr,function(arr){console.log(arr)});