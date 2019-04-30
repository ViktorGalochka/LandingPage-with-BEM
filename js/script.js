let prevSwitch = document.querySelector(".slider__switch-left");
let nextSwitch = document.querySelector(".slider__switch-right");

let openUp = document.querySelector(".fa-plus")
let collapsedText = document.querySelector(".services__collapse-content")

let i = 0;

let images = document.querySelectorAll(".slider img");

prevSwitch.addEventListener("click", function() {
	images[i].className = "";
	i--;
	if (i < 0) {
		i = images.length - 1;
	}
	images[i].className = "slider__show";
})

nextSwitch.addEventListener("click", function() {
	images[i].className = "";
	i++;
	if (i >= images.length) {
		i = 0;
	}
	images[i].className = "slider__show";
})

openUp.addEventListener("click", function() {
	collapsedText.classList.toggle("services__collapse-enable");
	openUp.classList.toggle("fa-plus");
	openUp.classList.toggle("fa-minus");

})
