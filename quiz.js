var CarLot = (function(domBuild) {

// 	var vehicleCard = [];



// // returns jsonData
// 	carLot.getJsonDataArray();

// 	// console.log(vehicleCard);
	var inventoryArea = document.getElementById("inventory");
	function populatePage (carInventory) {
	  // Loop over the inventory and populate the page
  	inventoryArea.innerHTML = `<div class="row">`;
	  for (var i = 0; i < carInventory.length; i++) {
	  	var car = carInventory[i];
	  	inventoryArea.innerHTML += `<div class="card col-sm-3 col-md-3 col-lg-3"><dl class="list-unstyled"><img class="cardImg" src='${car.img}'><dt>Make</dt><dd>${car.make}</dd><dt>Model</dt><dd>${car.model}</dd><dt>Year</dt><dd>${car.year}</dd><dt>Price</dt><dd>${car.price}</dd><dt>Color</dt><dd>${car.color}</dd><dt>Purchased?</dt><dd>${car.purchased}</dd><dt>Description</dt><dd>${car.description}</dd></dl></div><div class="col-sm-1 col-md-1 col-lg-1"></div>`;
	  };
  	inventoryArea.innerHTML += `</div>`


  // Now that the DOM is loaded, establish all the event listeners needed
  // CarLot.activateEvents();
}

// Load the inventory and send a callback function to be
// invoked after the process is complete
CarLot.loadInventory(populatePage);

return domBuild

})(CarLot || {});

