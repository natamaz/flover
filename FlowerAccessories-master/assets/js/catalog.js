$(document).ready(function(){

  $('.tabs > h3').on('click', function() {
    $('.tabs > h3').removeClass('active');
    $(this).addClass('active');
  });

  $('.sort-price').on('click', function() {
    $('.sort-price').removeClass('active');
    $(this).addClass('active');
  });

  $('.sort-text').on('click', function() {
    $('.sort-text').removeClass('active');
    $(this).addClass('active');
  });

  $('.one-filter > h5').on('click', function() {
    $(this).parent().find('li').toggleClass('active');
  });

  $('.recent-slider').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    cssEase: 'linear',
    speed: 500,
    infinite: true,
    cssEase: 'cubic-bezier(0.7, 0, 0.3, 1)',
    touchThreshold: 100,
    autoplay: true,
    autoplaySpeed: 5000,
    variableWidth: false,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 2,
          centerMode: false,
          arrows: true,
          variableWidth: false,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          centerPadding: 0,
          centerMode: true,
          arrows: false,
          variableWidth: true,
        }
      }

    ]
  });
  $(".slick-arrow").empty()


});