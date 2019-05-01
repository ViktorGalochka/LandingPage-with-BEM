let anchor = document.getElementById("to-form");
let prevSwitch = document.querySelector(".slider__switch-left");
let nextSwitch = document.querySelector(".slider__switch-right");
let openUp = document.getElementsByClassName("fa-plus")
let images = document.querySelectorAll(".slider img");
let form = document.querySelector("footer");

let slide = 0;
let scrolled;
let target = form.getBoundingClientRect().top;

anchor.addEventListener("click", function() {
	scrolled = window.pageYOffset;
	scrollToForm();
})
function scrollToForm() {
	if(scrolled < target) {
		window.scrollTo(0, scrolled);
		scrolled += 100;
		requestAnimationFrame(scrollToForm);
	}
	else {
		// scrolled = target;
		window.scrollTo(0, target);
	}
}

prevSwitch.addEventListener("click", function() {
	images[slide].className = "";
	slide--;
	if (slide < 0) {
		slide = images.length - 1;
	}
	images[slide].className = "slider__show";
})

nextSwitch.addEventListener("click", function() {
	images[slide].className = "";
	slide++;
	if (slide >= images.length) {
		slide = 0;
	}
	images[slide].className = "slider__show";
})

for(i = 0; i < openUp.length; i++) {
	openUp[i].addEventListener("click", function () {
		this.classList.toggle("fa-minus");
		this.classList.toggle("fa-plus");
		let content = this.nextElementSibling;
		if(content.style.maxHeight) {
			content.style.maxHeight = null;
			content.style.color = null;
		} else {
			content.style.maxHeight = content.scrollHeight + "px";
			content.style.color = "#fff";
		}
	})
}

let search = document.getElementsByClassName("fa-search-plus");

for(i = 0; i < search.length; i++) {
	search[i].addEventListener("click", function () {
		let content = this.nextElementSibling;
		let parent = this.parentNode;
		if(content.style.maxHeight) {
			content.style.maxHeight = null;
			content.style.background = null;
			parent.style.lineHeight = 257 + "px";
			
		} else {
			content.style.maxHeight = content.scrollHeight + "px";
			content.style.background = "rgba(255, 255, 255,.9)";
			parent.style.lineHeight = 180 + "px";
		}
	})
}