// Добавление карты Google Maps

function initMap() {
  var uluru = {lat: 59.938826, lng: 30.323083};
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 17,
    center: uluru
  });

  var marker = new google.maps.Marker({
    position: uluru,
    map: map,
    title: 'zinzidane.github.io/cat-energy',
    icon: {
      url: "img/map-pin.png",
      scaledSize: new google.maps.Size(124, 106)
    }
  });
}


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


if(sliderControl) {
	sliderControl.addEventListener('change', function () {
		if (!sliderControl.checked) {
			slideBefore.classList.add("slider__slide--show");
			slideAfter.classList.remove("slider__slide--show");
		}

		if (sliderControl.checked) {
			slideBefore.classList.remove("slider__slide--show");
			slideAfter.classList.add("slider__slide--show");
		}

	});
}


// Слайдер сравнения изображений на планшетных версиях

function createComparison(element, layer) {
	if(!element || !layer) {
		return false;
	}

	element.addEventListener('change', function(evt) {
		var width = evt.currentTarget.value;
		layer.style.width = width + "%";
/* 		layer.style.clip = `rect(0px ${width}px 0px 0px)`; */
	}, false);
}

var layer = document.querySelector('.slider__slide--prev');

createComparison(document.querySelector('.slider__range'), layer);


