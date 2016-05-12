var CarLot = (function(aug) {

// 	// console.log(vehicleCard);
	var inventoryArea = document.getElementById("inventory");
	aug.populatePage = function(carInventory) {
	  // Loop over the inventory and populate the page
  	var row = `<div class="row">`;
	  for (var i = 0; i < carInventory.length; i++) {
	  	var car = carInventory[i];
	  	row += `<div style="border-color: ${car.color};" class="card col-sm-3 col-md-3 col-lg-3">
								<dl class="list-unstyled"><img id="cardImg" src='${car.img}'>
								<dt>Make</dt>
								<dd id="make">${car.make}</dd>
								<dt>Model</dt>
								<dd id="model">${car.model}</dd>
								<dt>Year</dt>
								<dd id="year">${car.year}</dd>
								<dt>Price</dt>
								<dd id="price">${car.price}</dd>
								<dt>Color</dt>
								<dd id="color">${car.color}</dd>
								<dt>Purchased?</dt>
								<dd id="purchased">${car.purchased}</dd>
								<dt>Description</dt>
								<dd id="description">${car.description}</dd>
								</dl>
							</div>
							<div class="col-sm-1 col-md-1 col-lg-1"></div>`;
	  };
  	row += `</div>`;
  	inventoryArea.innerHTML = row;
  	var cards = document.querySelectorAll(".card");
  	// Now that the DOM is loaded, establish all the event listeners needed
		CarLot.activateEvents(cards);

	};

	// Load the inventory and send a callback function to be
	// invoked after the process is complete
	CarLot.loadInventory(CarLot.populatePage);

	return aug

})(CarLot || {});

