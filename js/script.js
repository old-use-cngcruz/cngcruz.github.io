$(document).ready(function() {


  $('.js--scroll-to-about').click(function() {
  $('html, body').animate({scrollTop: $('.js--section-about').offset().top}, 1000); 
  });
  
   $('.js--scroll-to-projects').click(function() {
  $('html, body').animate({scrollTop: $('.js--section-projects').offset().top}, 1000); 
  });
  
   $('.js--scroll-to-form').click(function() {
  $('html, body').animate({scrollTop: $('.js--section-form').offset().top}, 1000); 
  });


});
