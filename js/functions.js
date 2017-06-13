// Responsive Navigation
var navigation = responsiveNav("responsive-navigation", {customToggle: ".nav-toggle"});

// Responsive Video
// $(".media-video").fitVids();

// Gallery Slider
$('#gallery-slider').flexslider({
    animation: "slide",
    startAt: 0,
    controlsContainer: ".thumbnail-container",
    controlNav: true,
    manualControls: ".thumbnail-container img",
    animationLoop: true,
    directionNav: true,
    slideshow: false,
    touch: false,
    prevText: "",
    nextText: "",
    smoothHeight: true
});

// Functionality

// Navigation Variables
var navItems = $('.main-nav');
var navAbout = $('#navAbout');
var navOfferings = $('#navOfferings');
var navGallery = $('#navGallery');
var navPress = $('#navPress');
var navLopan = $('#navLopan');
var navContact = $('#navContact');

//Responsive Navigation Variables
var resNavItems = $('.res-nav');
var resAbout = $('#responsiveAbout');
var resOfferings = $('#responsiveOfferings');
var resGallery = $('#responsiveGallery');
var resPress = $('#responsivePress');
var resLopan = $('#responsiveLopan');
var resContact = $('#responsiveContact');

// Section Variables
var sectionIntro = $('#dailoIntro');
var sectionAbout = $('#about');
var sectionOfferings = $('#offerings');
var sectionGallery = $('#gallery');
var sectionPress = $('#press');
var sectionLopan = $('#lopan');
var sectionContact = $('#contact');

// Box Centering
var headerHeight = $('.main-navigation').height();
var offsetTop = headerHeight;
var box = $('.box');

var tolerance = 200;

var scrollInit = function() {
    var scrollTop = $(this).scrollTop();
    navItems.removeClass('selected');
    resNavItems.removeClass('selected');

    if (scrollTop >= sectionContact.position().top - tolerance || scrollTop + $(window).height() > $(document).height() - 25) {
        navContact.addClass('selected');
        resContact.addClass('selected');
    } else if (scrollTop >= sectionLopan.position().top - tolerance) {
        navLopan.addClass('selected');
        resLopan.addClass('selected');
    } else if (scrollTop >= sectionPress.position().top - tolerance) {
        navPress.addClass('selected');
        resPress.addClass('selected');
    } else if (scrollTop >= sectionGallery.position().top - tolerance) {
        navGallery.addClass('selected');
        resGallery.addClass('selected');
    } else if (scrollTop >= sectionOfferings.position().top - tolerance) {
        navOfferings.addClass('selected');
        resOfferings.addClass('selected');
    } else if (scrollTop >= sectionAbout.position().top - tolerance) {
        navAbout.addClass('selected');
        resAbout.addClass('selected');
    } else {

    }

    // Centering
    box.each(function() {
        $(this).css("padding-top", (($(window).height()-$(this).height()-offsetTop)/2) + "px");
        $(this).css("padding-bottom", "50px");
    });
}

$(window).scroll(scrollInit);
$(window).resize(scrollInit);
scrollInit();

// Initiate the Smooth Scroll
smoothScroll.init({
	speed: 500,
	easing: 'easeInOutQuad',
	offset: 0,
	updateURL: false,
	callbackBefore: function ( toggle, anchor ) {},
	callbackAfter: function ( toggle, anchor ) {}
});

// Sticky Navigation
$(window).scroll(function () {
    if( $(this).scrollTop() >= sectionIntro.height() ) {
        $('.main-navigation').addClass('fixed-nav');
    } else if( $(this).scrollTop() < sectionIntro.height() ) {
        $('.main-navigation').removeClass('fixed-nav');
    }
});

// Menu Widgets
var unowidget_menu =  new UnoappMenuWidget({
    appID:110150,
    border:false,
    width:"954",
    height:"1000",
    key:"f86890095c957e9b949d11d15f0d0cd5",
    layoutid:"6281",
        cid:107454,
    widgetcontainer:"menu_widget_110150"
});

var unowidget_menu =  new UnoappMenuWidget({
    appID:110151,
    border:false,
    width:"954",
    height:"1000",
    key:"f86890095c957e9b949d11d15f0d0cd5",
    layoutid:"6281",
        cid:107454,
    widgetcontainer:"menu_widget_110151"
}); 

var unowidget_menu =  new UnoappMenuWidget({
    appID:110169,
    border:false,
    width:"954",
    height:"1000",
    key:"f86890095c957e9b949d11d15f0d0cd5",
    layoutid:"6281",
        cid:107454,
    widgetcontainer:"menu_widget_110169"
}); 

var unowidget_menu =  new UnoappMenuWidget({
    appID:110170,
    border:false,
    width:"954",
    height:"1000",
    key:"f86890095c957e9b949d11d15f0d0cd5",
    layoutid:"6281",
        cid:107454,
    widgetcontainer:"menu_widget_110170"
}); 
