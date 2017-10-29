$( document ).ready(function(){
    $(".button-collapse").sideNav();
    $('.carousel.carousel-slider').carousel({fullWidth: true});
    $('.collapsible').collapsible();
    $('.tooltipped').tooltip({delay: 50});
    $('.dropdown-button').dropdown({
      inDuration: 300,
      outDuration: 225,
      constrainWidth: false, // Does not change width of dropdown to that of the activator
      hover: true, // Activate on hover
      gutter: 0, // Spacing from edge
      belowOrigin: false, // Displays dropdown below the button
      alignment: 'left', // Displays dropdown with edge aligned to the left of button
      stopPropagation: false // Stops event propagation
    }
  );

  $('.tap-target').tapTarget('open');
  $('.tap-target').tapTarget('close');
  $('.materialboxed').materialbox();
  $('.slider').slider({
    height: 800
  });
  $('.modal').modal();
  $('.parallax').parallax();
  $('.scrollspy').scrollSpy(
      function(id) {
    return 'a[href="#' + id + '"]';
    }
  );
  $('ul.tabs').tabs();
  var owl = $('.owl-carousel');
  owl.owlCarousel({
      loop:true,
      nav:true,
      margin:10,
      responsive:{
          0:{
              items:1
          },
          600:{
              items:2
          },            
          960:{
              items:3
          },
          1200:{
              items:4
          }
      }
  });
  owl.on('mousewheel', '.owl-stage', function (e) {
      if (e.deltaY>0) {
          owl.trigger('next.owl');
      } else {
          owl.trigger('prev.owl');
      }
      e.preventDefault();
  });
})