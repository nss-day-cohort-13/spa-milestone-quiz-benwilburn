
var CarLot = (function(aug){
	var userInput = document.querySelector("#userInput");
	var collapsedUserInput = document.querySelector("#collapsedUserInput");


	aug.changeSelectedStyle = function (domElement, color) {
			domElement.classList.add("cardBorderWidth", color);
	}

	aug.resetStyle = function (color) {
		var cards = document.querySelectorAll(".card");
		for (var i = 0; i < cards.length; i++) {
			cards[i].classList.remove("cardBorderWidth", color);
		};
	}

	aug.editDescription = function (domElement) {
		userInput.focus();
		var elementTextToEdit = domElement.querySelector("#description").textContent;
		userInput.value = elementTextToEdit;
		elementTextToEdit = "";
	}

	return aug;

})(CarLot || {});
