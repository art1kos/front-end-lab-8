// Your code goes here
var rootNode = document.getElementById("root");


var title =  document.createElement("h1")
title.id="title";
title.innerHTML = "Most popular tanks";
rootNode.appendChild(title);

var  preView = document.createElement("div")
preView.id="tanks";
rootNode.appendChild(preView);

var backList =  document.createElement("a")
	backList.id="backList";
	backList.setAttribute("onclick", "myFunction1()");
	backList.innerHTML = "Back to list view";
	

function myFunction1() {
	
	var myNode = document.getElementById("root");
	myNode .innerHTML = '';

	var rootNode = document.getElementById("root");


	var title =  document.createElement("h1")
	title.id="title";
	title.innerHTML = "Most popular tanks";
	rootNode.appendChild(title);

	var  preView = document.createElement("div")
	preView.id="tanks";
	rootNode.appendChild(preView);
	preView.appendChild(preViewObject);
	preView.appendChild(preViewT62);
	preView.appendChild(preViewE100);
	preView.appendChild(preViewMaus);	
	preView.appendChild(preViewT110);
	preView.appendChild(preViewT57);	
	preView.appendChild(preViewFV);	
	preView.appendChild(preViewConqueror);
	document.getElementById("tank1").addEventListener("click", myFunction);
	document.getElementById("tank2").addEventListener("click", myFunction2);
	document.getElementById("tank3").addEventListener("click", myFunction3);
	document.getElementById("tank4").addEventListener("click", myFunction4);
	document.getElementById("tank5").addEventListener("click", myFunction5);
	document.getElementById("tank6").addEventListener("click", myFunction6);
	document.getElementById("tank7").addEventListener("click", myFunction7);
	document.getElementById("tank8").addEventListener("click", myFunction8);
}




var  preViewObject = document.createElement("div")
preViewObject.id="tank1";
preView.appendChild(preViewObject);
document.getElementById('tank1')
    .innerHTML = '<img class="pre" src="images/tanks/object_140.png" /><p><img class="preCountrie" src="images/countries/ussr.png" />10 OBJECT 140</p>';	


var  preViewT62 = document.createElement("div")
preViewT62.id="tank2";
preView.appendChild(preViewT62);
document.getElementById('tank2')
    .innerHTML = '<img class="pre" src="images/tanks/t62a.png" /><p><img class="preCountrie" src="images/countries/ussr.png" />10 T-62A</p>';


var  preViewE100 = document.createElement("div")
preViewE100.id="tank3";
preView.appendChild(preViewE100);
document.getElementById('tank3')
    .innerHTML = '<img class="pre" src="images/tanks/e-100.png" /><p><img class="preCountrie" src="images/countries/germany.png" />10 E 100</p>';


var  preViewMaus = document.createElement("div")
preViewMaus.id="tank4";
preView.appendChild(preViewMaus);
document.getElementById('tank4')
    .innerHTML = '<img class="pre" src="images/tanks/maus.png" /><p><img class="preCountrie" src="images/countries/germany.png" />10 MAUS</p>';


var  preViewT110 = document.createElement("div")
preViewT110.id="tank5";
preView.appendChild(preViewT110);
document.getElementById('tank5')
    .innerHTML = '<img class="pre" src="images/tanks/t110e5.png" /><p><img class="preCountrie" src="images/countries/usa.png" />10 T110E5</p>';


var  preViewT57 = document.createElement("div")
preViewT57.id="tank6";
preView.appendChild(preViewT57);
document.getElementById('tank6')
    .innerHTML = '<img class="pre" src="images/tanks/t57.png" /><p><img class="preCountrie" src="images/countries/usa.png" />10 T57 HEAVY TANK</p>';



var  preViewFV = document.createElement("div")
preViewFV.id="tank7";
preView.appendChild(preViewFV);
document.getElementById('tank7')
    .innerHTML = '<img class="pre" src="images/tanks/fv215b.png" /><p><img class="preCountrie" src="images/countries/uk.png" />10 FV215B</p>';


var  preViewConqueror = document.createElement("div")
preViewConqueror.id="tank8";
preView.appendChild(preViewConqueror);
document.getElementById('tank8')
    .innerHTML = '<img class="pre" src="images/tanks/conqueror_gun.png" /><p><img class="preCountrie" src="images/countries/uk.png" />10 CONQUEROR</p>	';





document.getElementById("tank1").addEventListener("click", myFunction);
function myFunction() {
	var myNode = document.getElementById("root");
	myNode.innerHTML = '';
    
	var  viewTank1 = document.createElement("div")
	viewTank1.id="tankObject";
	rootNode.appendChild(viewTank1);

	var titleObject =  document.createElement("h1")
	titleObject.id="titleObject";
	viewTank1.appendChild(titleObject);
	document.getElementById('titleObject')
	    .innerHTML = '<h1><img class="preCountrie" src="images/countries/ussr.png" />10 OBJECT 140 (level 10)</h1>	';

	var  preViewTank1 = document.createElement("div")
	preViewTank1.id="previewTankObject";
	viewTank1.appendChild(preViewTank1);
	document.getElementById('previewTankObject')
	    .innerHTML = '<h2>Preview</h2><img src="images/tanks/object_140.png">';

	var  objectCharacteristic = document.createElement("div")
	objectCharacteristic.id="characteristicTankObject";
	tankObject.appendChild(objectCharacteristic);
	document.getElementById('characteristicTankObject')
	    .innerHTML = '<h2>Characteristic</h2><table><tbody><tr><td>damage</td><td>420</td></tr><tr><td>breoning</td><td>264</td></tr><tr><td>attack speed</td><td>9.09</td></tr><tr><td>time of targeting</td><td>2.1</td></tr><tr><td>ammunition</td><td>50</td></tr></tbody></table>';

	
	tankObject.appendChild(backList);

}

document.getElementById("tank2").addEventListener("click", myFunction2);
function myFunction2() {
	var myNode = document.getElementById("root");
	myNode.innerHTML = '';
    
	var  viewTank2 = document.createElement("div")
	viewTank2.id="tankT62";
	rootNode.appendChild(viewTank2);

	var titleT62 =  document.createElement("h1")
	titleT62.id="titleT62";
	viewTank2.appendChild(titleT62);
	document.getElementById('titleT62')
	    .innerHTML = '<h1><img class="preCountrie" src="images/countries/ussr.png" />10 T-62A (level 10)</h1>	';

	var  preViewTank2 = document.createElement("div")
	preViewTank2.id="previewTankT62";
	viewTank2.appendChild(preViewTank2);
	document.getElementById('previewTankT62')
	    .innerHTML = '<h2>Preview</h2><img src="images/tanks/t62a.png">';

	var  t62Characteristic = document.createElement("div")
	t62Characteristic.id="characteristicTankT62";
	tankT62.appendChild(t62Characteristic);
	document.getElementById('characteristicTankT62')
	    .innerHTML = '<h2>Characteristic</h2><table><tbody><tr><td>damage</td><td>639</td></tr><tr><td>breoning</td><td>246</td></tr><tr><td>attack speed</td><td>9.09</td></tr><tr><td>time of targeting</td><td>2</td></tr><tr><td>ammunition</td><td>50</td></tr></tbody></table>';

	
	tankT62.appendChild(backList);

}

document.getElementById("tank3").addEventListener("click", myFunction3);
function myFunction3() {
	var myNode = document.getElementById("root");
	myNode.innerHTML = '';
    
	var  viewTank3 = document.createElement("div")
	viewTank3.id="tankE100";
	rootNode.appendChild(viewTank3);

	var titleE100 =  document.createElement("h1")
	titleE100.id="titleE100";
	viewTank3.appendChild(titleE100);
	document.getElementById('titleE100')
	    .innerHTML = '<h1><img class="preCountrie" src="images/countries/germany.png" />10 E-100 (level 10)</h1>	';

	var  preViewTank3 = document.createElement("div")
	preViewTank3.id="previewTankE100";
	viewTank3.appendChild(preViewTank3);
	document.getElementById('previewTankE100')
	    .innerHTML = '<h2>Preview</h2><img src="images/tanks/e-100.png">';

	var  e100Characteristic = document.createElement("div")
	e100Characteristic.id="characteristicTankE100";
	tankE100.appendChild(e100Characteristic);
	document.getElementById('characteristicTankE100')
	    .innerHTML = '<h2>Characteristic</h2><table><tbody><tr><td>damage</td><td>630</td></tr><tr><td>breoning</td><td>246</td></tr><tr><td>attack speed</td><td>4.51</td></tr><tr><td>time of targeting</td><td>2.3</td></tr><tr><td>ammunition</td><td>72</td></tr></tbody></table>';

	
	tankE100.appendChild(backList);

}

document.getElementById("tank4").addEventListener("click", myFunction4);
function myFunction4() {
	var myNode = document.getElementById("root");
	myNode.innerHTML = '';
    
	var  viewTank4 = document.createElement("div")
	viewTank4.id="tankMaus";
	rootNode.appendChild(viewTank4);

	var titleMaus =  document.createElement("h1")
	titleMaus.id="titleMaus";
	viewTank4.appendChild(titleMaus);
	document.getElementById('titleMaus')
	    .innerHTML = '<h1><img class="preCountrie" src="images/countries/germany.png" />10 Maus (level 10)</h1>	';

	var  preViewTank4 = document.createElement("div")
	preViewTank4.id="previewTankMaus";
	viewTank4.appendChild(preViewTank4);
	document.getElementById('previewTankMaus')
	    .innerHTML = '<h2>Preview</h2><img src="images/tanks/maus.png">';

	var  mausCharacteristic = document.createElement("div")
	mausCharacteristic.id="characteristicTankMaus";
	tankMaus.appendChild(mausCharacteristic);
	document.getElementById('characteristicTankMaus')
	    .innerHTML = '<h2>Characteristic</h2><table><tbody><tr><td>damage</td><td>630</td></tr><tr><td>breoning</td><td>246</td></tr><tr><td>attack speed</td><td>4.51</td></tr><tr><td>time of targeting</td><td>2.1</td></tr><tr><td>ammunition</td><td>68</td></tr></tbody></table>';

	
	tankMaus.appendChild(backList);

}

document.getElementById("tank5").addEventListener("click", myFunction5);
function myFunction5() {
	var myNode = document.getElementById("root");
	myNode.innerHTML = '';
    
	var  viewTank5 = document.createElement("div")
	viewTank5.id="tankT110";
	rootNode.appendChild(viewTank5);

	var titleT110 =  document.createElement("h1")
	titleT110.id="titleT110";
	viewTank5.appendChild(titleT110);
	document.getElementById('titleT110')
	    .innerHTML = '<h1><img class="preCountrie" src="images/countries/usa.png" />10 T110E5 (level 10)</h1>	';

	var  preViewTank5 = document.createElement("div")
	preViewTank5.id="previewTankT110";
	viewTank5.appendChild(preViewTank5);
	document.getElementById('previewTankT110')
	    .innerHTML = '<h2>Preview</h2><img src="images/tanks/t110e5.png">';

	var  t110Characteristic = document.createElement("div")
	t110Characteristic.id="characteristicTankT110";
	tankT110.appendChild(t110Characteristic);
	document.getElementById('characteristicTankT110')
	    .innerHTML = '<h2>Characteristic</h2><table><tbody><tr><td>damage</td><td>515</td></tr><tr><td>breoning</td><td>258</td></tr><tr><td>attack speed</td><td>6</td></tr><tr><td>time of targeting</td><td>2</td></tr><tr><td>ammunition</td><td>62</td></tr></tbody></table>';


	tankT110.appendChild(backList);

}

document.getElementById("tank6").addEventListener("click", myFunction6);
function myFunction6() {
	var myNode = document.getElementById("root");
	myNode.innerHTML = '';
  
	var  viewTank6 = document.createElement("div")
	viewTank6.id="tankT57";
	rootNode.appendChild(viewTank6);

	var titleT57 =  document.createElement("h1")
	titleT57.id="titleT57";
	viewTank6.appendChild(titleT57);
	document.getElementById('titleT57')
	    .innerHTML = '<h1><img class="preCountrie" src="images/countries/usa.png" />10 T57 HEAVY TANK (level 10)</h1>	';

	var  preViewTank6 = document.createElement("div")
	preViewTank6.id="previewTankT57";
	viewTank6.appendChild(preViewTank6);
	document.getElementById('previewTankT57')
	    .innerHTML = '<h2>Preview</h2><img src="images/tanks/t57.png">';

	var  t57Characteristic = document.createElement("div")
	t57Characteristic.id="characteristicTankT57";
	tankT57.appendChild(t57Characteristic);
	document.getElementById('characteristicTankT57')
	    .innerHTML = '<h2>Characteristic</h2><table><tbody><tr><td>damage</td><td>515</td></tr><tr><td>breoning</td><td>258</td></tr><tr><td>attack speed</td><td>7.74</td></tr><tr><td>time of targeting</td><td>2.9</td></tr><tr><td>ammunition</td><td>4</td></tr></tbody></table>';

	
	tankT57.appendChild(backList);

}

document.getElementById("tank7").addEventListener("click", myFunction7);
function myFunction7() {
	var myNode = document.getElementById("root");
	myNode.innerHTML = '';
    
	var  viewTank7 = document.createElement("div")
	viewTank7.id="tankFv";
	rootNode.appendChild(viewTank7);

	var titleFv =  document.createElement("h1")
	titleFv.id="titleFv";
	viewTank7.appendChild(titleFv);
	document.getElementById('titleFv')
	    .innerHTML = '<h1><img class="preCountrie" src="images/countries/uk.png" />10 FV215B (level 10)</h1>	';

	var  preViewTank7 = document.createElement("div")
	preViewTank7.id="previewTankFv";
	viewTank7.appendChild(preViewTank7);
	document.getElementById('previewTankFv')
	    .innerHTML = '<h2>Preview</h2><img src="images/tanks/fv215b.png">';

	var  fvCharacteristic = document.createElement("div")
	fvCharacteristic.id="characteristicTankFv";
	tankFv.appendChild(fvCharacteristic);
	document.getElementById('characteristicTankFv')
	    .innerHTML = '<h2>Characteristic</h2><table><tbody><tr><td>damage</td><td>515</td></tr><tr><td>breoning</td><td>249</td></tr><tr><td>attack speed</td><td>6.9</td></tr><tr><td>time of targeting</td><td>1.7</td></tr><tr><td>ammunition</td><td>35</td></tr></tbody></table>';

	tankFv.appendChild(backList);

}

document.getElementById("tank8").addEventListener("click", myFunction8);
function myFunction8() {
	var myNode = document.getElementById("root");
	myNode.innerHTML = '';
    
	var  viewTank8 = document.createElement("div")
	viewTank8.id="tankConqueror";
	rootNode.appendChild(viewTank8);

	var titleConqueror =  document.createElement("h1")
	titleConqueror.id="titleConqueror";
	viewTank8.appendChild(titleConqueror);
	document.getElementById('titleConqueror')
	    .innerHTML = '<h1><img class="preCountrie" src="images/countries/uk.png" />10 CONQUEROR GUN CARRIAGE (level 10)</h1>	';

	var  preViewTank8 = document.createElement("div")
	preViewTank8.id="previewTankConqueror";
	viewTank8.appendChild(preViewTank8);
	document.getElementById('previewTankConqueror')
	    .innerHTML = '<h2>Preview</h2><img src="images/tanks/conqueror_gun.png">';

	var  conquerorCharacteristic = document.createElement("div")
	conquerorCharacteristic.id="characteristicTankConqueror";
	tankConqueror.appendChild(conquerorCharacteristic);
	document.getElementById('characteristicTankConqueror')
	    .innerHTML = '<h2>Characteristic</h2><table><tbody><tr><td>damage</td><td>1200</td></tr><tr><td>breoning</td><td>59</td></tr><tr><td>attack speed</td><td>1.3</td></tr><tr><td>time of targeting</td><td>6.1</td></tr><tr><td>ammunition</td><td>24</td></tr></tbody></table>';

	
	tankConqueror.appendChild(backList);

}



//try to create function
/*function create(tanks) {
	for(var i = 0; i < tanks.length; i++ ){
		var tank = document.createElement("div")
		tank.id = ("tank" + i );
		rootNode.appendChild(tank);
		document.getElementById('tank' + i)
		     .innerHTML = '<img class="pre" src="'+tanks[i].preview+'" /><p><img class="preCountrie" src="'+tanks[i].country_image+'" />10 T110E5</p>';
		
	}
}


function addListeners(tanks) {
	var i;
	for(i = 0; i < tanks.length; i++){
		document.getElementById("tank" + i).addEventListener("click", function(){
		var a = i;
		alert(a);
		var myNode = document.getElementById("root");
		myNode.innerHTML = '';

		var  div = document.createElement("div")
		div.id="characteristic" + i;
		rootNode.appendChild(div);

		var title =  document.createElement("h1")
		title.id="title";
		div.appendChild(title);	
		document.getElementById('title')
		    .innerHTML = '<h1><img class="preCountrie" src="'+tanks[i].country_image+'" />10 FV215B (level 10)</h1>	';

		var  preView = document.createElement("div")
		preView.id="previewTank";
		div.appendChild(preView);
		document.getElementById('previewTank')
		    .innerHTML = '<h2>Preview</h2><img src="'+tanks[i].preview+'">';

		var  Characteristic = document.createElement("div")
		Characteristic.id="characteristicTank";
		div.appendChild(Characteristic);
		document.getElementById('characteristicTank')
		    .innerHTML = '<h2>Characteristic</h2><table><tbody><tr><td>damage</td><td>515</td></tr><tr><td>breoning</td><td>249</td></tr><tr><td>attack speed</td><td>6.9</td></tr><tr><td>time of targeting</td><td>1.7</td></tr><tr><td>ammunition</td><td>35</td></tr></tbody></table>';

		div.appendChild(backList);
		});
		
			
	}
	
}
create(tanks);
addListeners(tanks);
*/
