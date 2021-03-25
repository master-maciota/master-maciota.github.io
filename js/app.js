// Slide Suave
$('nav a').click(function(e){
	e.preventDefault();
	var id = $(this).attr('href'),
			menuHeight = $('nav').innerHeight(),
			targetOffset = $(id).offset().top;
	$('html, body').animate({
		scrollTop: targetOffset - (menuHeight - 6)
	}, 500);
});

// Debounce do Lodash
debounce = function(func, wait, immediate) {
	var timeout;
	return function() {
		var context = this, args = arguments;
		var later = function() {
			timeout = null;
			if (!immediate) func.apply(context, args);
		};
		var callNow = immediate && !timeout;
		clearTimeout(timeout);
		timeout = setTimeout(later, wait);
		if (callNow) func.apply(context, args);
	};
};

// Animação ao Scroll
(function(){
	var $target = $('.anime'),
			animationClass = 'anime-start',
			offset = $(window).height() * 7/10;

	function animeScroll() {
		var documentTop = $(document).scrollTop();

		$target.each(function(){
			var itemTop = $(this).offset().top;
			if (documentTop > itemTop - offset) {
				$(this).addClass(animationClass);
			} else {
				$(this).removeClass(animationClass);
			}
		});
	}

	animeScroll();

	$(document).scroll(debounce(function(){
		animeScroll();
	}, 200));
})();

// Som de Fundo AutoPlay
window.addEventListener("DOMContentLoaded", event => {
	const audio = document.getElementById("audio");
	audio.play();
 });

var mute = true;

$('.som').click(function(e){
	const audio = document.getElementById("audio");
	audio.volume = 0.5;
	mute = !mute;

	if (mute) {
		$("#som-image").attr("src","img-site/mute.png");
		audio.pause();
	}

	if (!mute) {
		$("#som-image").attr("src","img-site/sound.png");
		audio.play();
	};
})

// Som do Botão
$('.button').click(function(e){
	const audio = document.getElementById("call-to-action");
	audio.volume = 0.1;
	audio.play();

})