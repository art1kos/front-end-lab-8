var sideFirst = parseFloat(prompt("Enter first side of triangle", ""));
var sideSecond = parseFloat(prompt("Enter second side of triangle", ""));
var sideThird = parseFloat(prompt("Enter third side of triangle", ""));

var equilateral = "Equilateral";
var isosceles = "Isosceles";
var scalene = "Scalene";
var rightTriangle  = "Right triangle"; 

var p = (sideFirst+sideSecond+sideThird)/2;
var square = Math.sqrt(p*(p-sideFirst)*(p-sideSecond)*(p-sideThird)).toFixed(2);


if(sideFirst+sideSecond<=sideThird|| sideFirst+sideThird<=sideSecond||sideSecond+sideThird<=sideFirst){
	console.log("Incorrect data, please input correct data!")
}else if (isNaN(sideFirst) || isNaN(sideSecond) || isNaN(sideThird)) {
  console.log("Incorrect data, please input correct data!");
} else if(sideFirst === sideSecond && sideFirst === sideThird && sideSecond === sideThird){
	console.log("Type of triangle is " + equilateral + " and square is " + square);
} else if(sideFirst === sideSecond || sideFirst === sideThird || sideSecond === sideThird){
	console.log("Type of triangle is " + isosceles + " and square is " + square);
} else if(Math.pow(sideFirst, 2) === Math.pow(sideSecond, 2) + Math.pow(sideThird, 2) || Math.pow(sideSecond, 2) == Math.pow(sideFirst, 2) + Math.pow(sideThird, 2) || Math.pow(sideThird, 2) == Math.pow(sideFirst, 2) + Math.pow(sideSecond, 2)){
	console.log("Type of triangle is " + rightTriangle + " and square is " + square);
} else{
	console.log("Type of triangle is " + scalene + " and square is " + square);
}

