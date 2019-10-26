$.noConflict();

jQuery(document).ready(function($) {

	"use strict";

	[].slice.call( document.querySelectorAll( 'select.cs-select' ) ).forEach( function(el) {
		new SelectFx(el);
	} );

	jQuery('.selectpicker').selectpicker;


	$('#menuToggle').on('click', function(event) {
		$('body').toggleClass('open');
		full = !full;
	});

	var closed = false;

	$( window ).load(function() {
		// Run code
		if(!closed){
			$('body').toggleClass('open');
			closed = true;
		}
		
	});

	var full = false;

	$('#left-panel').mouseover(function(){
		if(!full){
			$('body').toggleClass('open');
			full = true;
		}
	});

	$('#left-panel').mouseleave(function(){		
		if(full){
			$('body').toggleClass('open');
			full = false;
		}
	});
	$('.toolTipMenu').mouseover(function(){
		if(!full){
			full=true;
		}
	});

	$('.search-trigger').on('click', function(event) {
		event.preventDefault();
		event.stopPropagation();
		$('.search-trigger').parent('.header-left').addClass('open');
	});

	$('.search-close').on('click', function(event) {
		event.preventDefault();
		event.stopPropagation();
		$('.search-trigger').parent('.header-left').removeClass('open');
	});

	
	


	// $('.user-area> a').on('click', function(event) {
	// 	event.preventDefault();
	// 	event.stopPropagation();
	// 	$('.user-menu').parent().removeClass('open');
	// 	$('.user-menu').parent().toggleClass('open');
	// });


});