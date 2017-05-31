var target = 0;

var cargarPagina = function () {
	// Elementos
	var $botones = $(".control");
	var $anterior = $(".previous");
	var $siguiente = $(".next");

	// Eventos
	$botones.click(cambiarImagen);
	$anterior.click(anteriorImagen);
	$siguiente.click(siguienteImagen);
}

$(document).ready(cargarPagina);

var cambiarImagen = function () {
	target = parseInt($(this).data("target"));
	mostrarImagen(target);
	cambiarColorBoton(target);
};


var mostrarImagen = function (target) {
	var $lastSlide = $("div.active");
	var $slide = $("div[data-slide='" + target + "']");
	$lastSlide.removeClass("active");
	$slide.addClass("active");
};
var cambiarColorBoton = function (target) {
	var $lastSlide = $("button.active");
	var $slide = $("button[data-target='" + target + "']");
	$lastSlide.removeClass("active");
	$slide.addClass("active");
};

var anteriorImagen = function (e) {
	e.preventDefault();
	target = target - 1;
	target = (target < 0) ? 4 : target;
	mostrarImagen(target);
	cambiarColorBoton(target)
};

var siguienteImagen = function () {
	// e.preventDefault();	
	target = target + 1;
	target = (target > 4) ? 0 : target;
	mostrarImagen(target);
	cambiarColorBoton(target);
};

var autoplay =function () {
	interval = setInterval(function(){
		siguienteImagen();
	},3000);
}
autoplay();
