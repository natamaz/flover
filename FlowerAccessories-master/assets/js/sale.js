$(document).ready(function(){
 
    function windowSize(){
      if ($(window).width() < '1280'){
        $('.interest-slider').slick({
          infinite: true,
          slidesToShow: 3,
          slidesToScroll: 1,
          cssEase: 'linear',
          speed: 500,
          infinite: true,
          cssEase: 'cubic-bezier(0.7, 0, 0.3, 1)',
          touchThreshold: 100,
          variableWidth: true,
          responsive: [
            {
              breakpoint: 1280,
              settings: {
                slidesToShow: 2,
                arrows: false,
              }
            },
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 1,
                arrows:false,
              }
            }
          ]
        });
      } else {
        $('.interest-slider').unslick()
      }
  }
    $(window).on('load resize',windowSize);

    $('.discount-slider').slick({
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      cssEase: 'linear',
      speed: 500,
      infinite: true,
      centerPadding: 0,
      touchThreshold: 100,
      variableWidth: true,
      centerMode: true,
      responsive: [
        {
          breakpoint: 1280,
          settings: {
            slidesToShow: 3,
            arrows: true,
            centerMode: true,
            infinite: true,
          }
        },
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 1,
            arrows:false,
            centerMode: true,
            infinite: true,
          }
        }
      ]
    });
  
    $(".slick-arrow").empty()

});