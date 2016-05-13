
var CarLot = (function(aug) {
	var form = document.querySelector("#navbar-form")
	var userInput = document.querySelector("#userInput");
	var collapsedUserInput = document.querySelector("#collapsedUserInput");
	var submit = document.querySelector("#submit");

	aug.activateEvents = function(domElement) {
		for (var i = 0; i < domElement.length; i++) {
			domElement[i].addEventListener("click", () => {
				var color = "grey";
				var selectedElement = event.currentTarget;
				CarLot.resetStyle(color);
				CarLot.changeSelectedStyle(selectedElement, color);
				CarLot.editDescription(selectedElement);
			});
			userInput.addEventListener("keyup", () => {
				event.preventDefault();
				var domElement = document.querySelector("#description");
				domElement.innerHTML = userInput.value;
			});

			submit.addEventListener("click", formReset);

			function formReset (){
				event.preventDefault();
				form.reset();
			}
		};
	};



	return aug;

})(CarLot || {});
