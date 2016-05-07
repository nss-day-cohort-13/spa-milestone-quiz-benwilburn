var CarLot = (function(domBuild) {

// 	var vehicleCard = [];



// // returns jsonData
// 	carLot.getJsonDataArray();

// 	// console.log(vehicleCard);
	var inventoryArea = document.getElementById("inventory");
	function populatePage (carInventory) {
	  // Loop over the inventory and populate the page
	  for (var i = 0; i < carInventory.length; i++) {
	  	var car = carInventory[i];
	  	inventoryArea.innerHTML += `<div class='row'><div class='col-xs-12 col-sm-6 col-md-4 col-lg-4'>${car.make}</div></div><div class='col-xs-12 col-sm-6 col-md-4 col-lg-4'>${car.model}</div><div class='col-xs-12 col-sm-6 col-md-4 col-lg-4'>${car.year}</div><div class='col-xs-12 col-sm-6 col-md-4 col-lg-4'>${car.price}</div><div class='col-xs-12 col-sm-6 col-md-4 col-lg-4'>${car.color}</div><div class='col-xs-12 col-sm-6 col-md-4 col-lg-4'>${car.purchased}</div><div class='col-xs-12 col-sm-6 col-md-4 col-lg-4'>${car.description}</div>`;
	  };


  // Now that the DOM is loaded, establish all the event listeners needed
  // CarLot.activateEvents();
}

// Load the inventory and send a callback function to be
// invoked after the process is complete
CarLot.loadInventory(populatePage);

return domBuild

})(CarLot || {});

