
var carLot = (function(xhr){

	var jsonCard = [];
	var	loadJson = new XMLHttpRequest();
	loadJson.addEventListener("load", getMessageFromJson);
	loadJson.open("GET", "inventory.json");
	loadJson.send();


	function getMessageFromJson() {
		var data = JSON.parse(this.responseText);
		for (var i = 0; i < data.cars.length; i++) {
			jsonCard.push(data.cars[i]);
		}
		console.log(jsonCard);
	}



}(carLot || {}));
