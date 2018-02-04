// Навигация на мобильных устройствах
var navMain = document.querySelector(".main-nav");
var navToggler = document.querySelector(".main-nav__toggler");

navMain.classList.remove("main-nav--nojs");

navToggler.addEventListener("click", function () {
  if (navMain.classList.contains("main-nav--closed")) {
    navMain.classList.remove("main-nav--closed");
    navMain.classList.add("main-nav--opened");
  } else {
    navMain.classList.add("main-nav--closed");
    navMain.classList.remove("main-nav--opened");
  }
});

// Слайдер на мобильных устройствах

var sliderControl = document.querySelector(".slider__switch input");
var slideBefore = document.querySelector(".slider__slide--prev");
var slideAfter = document.querySelector(".slider__slide--next");

sliderControl.addEventListener('change', function() {
	if (!sliderControl.checked) {
	  slideBefore.classList.add("slider__slide--show");
	  slideAfter.classList.remove("slider__slide--show");
	}

	if (sliderControl.checked) {
		slideBefore.classList.remove("slider__slide--show");
		slideAfter.classList.add("slider__slide--show");
	}
	
});

// Слайдер сравнения изображений на планшетных версиях

function createComparison(element, layer) {
	element.addEventListener('change', function(evt) {
		console.log(evt);
		var width = evt.currentTarget.value;
		layer.style.width = width + "%";
/* 		layer.style.clip = `rect(0px ${width}px 0px 0px)`; */
	}, false);
}

var layer = document.querySelector('.slider__slide--prev');

createComparison(document.querySelector('.slider__range'), layer);