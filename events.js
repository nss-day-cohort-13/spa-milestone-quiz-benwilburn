
var CarLot = (function(aug) {

	var userInput = document.querySelector("#userInput");

	aug.activateEvents = function(domElement) {
		for (var i = 0; i < domElement.length; i++) {
			domElement[i].addEventListener("click", () => {
				var color = "grey";

				// var selectedElement = event.target.closest('.card');
				///////////////// OR ///////////////////////
				var selectedElement = event.target.parentElement.parentElement;

				CarLot.expandBorder(selectedElement);
				CarLot.changeBackgroundColor(selectedElement, color);
			});
		}

		// var newCards = Array.from();
		// makeNewArray().forEach(function(currentArrayItem){
		// 	currentArrayItem.addEventListener("click", expandBorder);
		// });



	};

	return aug;

}(CarLot || {}));
