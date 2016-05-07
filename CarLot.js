

var CarLot = (function () {

  var inventory = [];

  return {
    getInventory: function () {
    	return inventory;
    },
    loadInventory: function (populatePage) {
				// reads the json data and pushes it to an array
					getMessageFromJson = function() {
						var data = JSON.parse(this.responseText);
						for (var i = 0; i < data.cars.length; i++) {
							var cars = data.cars[i];
							inventory.push(cars);
						}
					populatePage(inventory);
					}

				// variable that stores the fucntion to add event listener to
					var	loadJson = new XMLHttpRequest();

				// variable with event listener tagged on ("on load", use this function)
					loadJson.addEventListener("load", getMessageFromJson);

				// (tells XMLHttpRequest, retrieve the file)
					loadJson.open("GET", "inventory.json");

				// returns as soon as the request^^ is sent
					loadJson.send();

      }
    }

})(CarLot || {});
