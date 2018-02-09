var EURO = prompt("Enter amount of EURO", "");
var USD = prompt("Enter amount of USD", "");
var currentEURO = 33.80;
var currentUSD = 27.45;


var UAHtoEURO = (currentEURO * EURO).toFixed(2);
var UAHtoUSD = (currentUSD * USD).toFixed(2);
var EUROtoUSD = (currentEURO / currentUSD).toFixed(2);


if(EURO < 0 || USD < 0 || isNaN(EURO) || isNaN(USD)){
	console.log("Incorrect data, please input correct data!")
}
else console.log( EURO + " euro are equil " + UAHtoEURO + " UAH" + ", " + USD + " dollars are equil " + UAHtoUSD + " UAH" + ", one euro is equil " + EUROtoUSD + " dollars.");

