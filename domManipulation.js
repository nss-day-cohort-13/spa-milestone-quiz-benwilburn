
var CarLot = (function(aug){

	aug.expandBorder = function(domElement) {
		// var card = event.currentTarget.closest(".card");
		// card.classList.toggle("cardBorderWidth-BackgroundColorToggle")
		domElement.style.borderWidth = 'thick';
	}

	aug.changeBackgroundColor = function(domElement,color) {
		domElement.style.backgroundColor = color;
	}

	aug.resetBorder = function(domElement) {
		domElement.style.borderWidth = "";
	}

	aug.changeBackgroundColor = function(domElement, color) {
		domElement.style.backgroundColor = "";
	}

	return aug;

})(CarLot || {});
