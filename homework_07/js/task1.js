var n = prompt("Enter N (0;20]", "0");
var k = 0;

if(Number.isInteger(n) || n <= 20){
	for(var i = 1; i <=n; i++){
		for(var j = n - i; j>0; j--){
			document.write("&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;");
		}
		for(var k=1; k < i;k++)
		{
			document.write("[~]");
		}
		for(var l=i; l >0; l--){
			document.write("[~]");
		}
		document.write("<br>");
	}
}else{
	alert("Enter correct number!");
}
