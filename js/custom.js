
    // var $sidebarArrow = $('.menu-item-has-children');

    // // Sidebar navigation arrows

    // $sidebarArrow.click(function() {
    //     $(this).next().slideToggle(300);
    // });




$(document).ready(function() {
	



	$("body").css("display", "none");

	$("body").fadeIn(1000);

	$("a.transition").click(function(event){
		event.preventDefault();
		linkLocation = this.href;
		$("body").fadeOut(1000, redirectPage);		
	});

	function redirectPage() {
		window.location = linkLocation;
	}

	var lastOpenImg;
	var lastOpenTxt;

	$("a.test").click(function(){
		$("#divTestArea1").slideToggle(2000).show;
		$("#info1").slideToggle(2000).show;

		if (lastOpenImg) lastOpenImg.slideToggle(2000).hide;
		if (lastOpenTxt) lastOpenTxt.slideToggle(2000).hide;

		lastOpenImg = $("#divTestArea1");
		lastOpenTxt = $("#info1");





	});	

	

	// $("a.test2").click(function(){
	// 	$("#divTestArea2").slideToggle(2000).show;
	// 	$("#info2").slideToggle(2000).show;

	// 	if (lastOpenImg) lastOpenImg.slideToggle(2000).hide;
	// 	if (lastOpenTxt) lastOpenTxt.slideToggle(2000).hide;

	// 	lastOpenImg = $("#divTestArea2");
	// 	lastOpenTxt = $("#info2");

	// });




});
function toggleSubs( ) {
	var menuitem = $( this );
	var submenu = menuitem.find( '+ul' );
	submenu.slideToggle( ).show;
}

function initPage( ) {


	$('#menu h2').click( toggleSubs );

		// var items =["home", "mic", "feel", "bestb"];

		// var index = Math.floor(Math.random() * items.length);
		// $('.' + items[index]).show();




	}



	$( document ).ready( initPage );





// function getRandomInt (min, max) {
//     return Math.floor(Math.random() * (max - min + 1)) + min;
// }

// $.fn.randomOrder = function(animate) {
//   this.each(function() {
//     var image = $(this);

//     // Viewport Dimensions
//     var vpHeight = $(window).height();
//     var vpWidth = $(window).width();

//     // Image Position
//     var xPos = getRandomInt(0, vpWidth - image.width());
//     var yPos = getRandomInt(0, vpHeight - image.height());
//     var zIndex = getRandomInt(0,13);

//     // Animation Duration
//     if(animate) var dur = 500;
//     else var dur = 0;

//     image.animate({left: xPos, top: yPos, 'z-index': zIndex}, dur);
//   });
// };

// //Setup
// $('img').randomOrder(false);
// $('img').draggable({stack: "home"});

// // Change after 10 Seconds
// window.setInterval(function(){
//   $('img').randomOrder(true);
// }, 2500);



