/*!
 * Start Bootstrap - Agency Bootstrap Theme (http://startbootstrap.com)
 * Code licensed under the Apache License v2.0.
 * For details, see http://www.apache.org/licenses/LICENSE-2.0.
 */

// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

// Highlight the top nav as scrolling occurs
$('body').scrollspy({
    target: '.navbar-fixed-top'
})

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function() {
    $('.navbar-toggle:visible').click();
});

// Modal script
$('#modal-body').on('show.bs.modal', function (event) {
  var button = $(event.relatedTarget) // Button that triggered the modal
  var recipient = button.data('whatever') // Extract info from data-* attributes
  // If necessary, you could initiate an AJAX request here (and then do the updating in a callback).
  // Update the modal's content. We'll use jQuery here, but you could use a data binding library or other methods instead.
});


// Timeline carousel
var autoplaySpeed = 2000;
var autoplayOn    = false;
var $slickRoot    = $('#js-timeline-carousel');

$slickRoot.on('init', function() {
  window.setInterval(function() {
    if (!autoplayOn) return;
    $slickRoot.slick('slickPrev');
  }, autoplaySpeed);
});

$slickRoot.slick({
  autoplay: false,
  speed: 300,
  cssEase: 'linear',
  slidesToShow: 3,
  slidesToScroll: 1,
  initialSlide: $('#js-timeline-carousel > .my-slide').length - 3
});

//$('#js-timeline-carousel').slick({
//  infinite: false,
//  autoplay: false,
//  speed: 300,
//  cssEase: 'linear',
//  slidesToShow: 3,
//  slidesToScroll: 1
//  //initialSlide: $('#js-timeline-carousel > .my-slide').length - 3
//});

