$(document).ready(function(){
 
  $('.one-color').on('click', function() {
    $('.one-color').css('border-color', 'transparent');
    var color = $(this).find('span').css("background-color");
    $(this).css('border-color', color)
  });
 
  $('.open-description').on('click', function() {
    $('.top-tabs > h4').removeClass('active');
    $(this).addClass('active');
    $('.review').removeClass('open');
    $('.description').addClass('open');
  });
 
  
 
  $('.open-review').on('click', function() {
    $('.top-tabs > h4').removeClass('active')
    $(this).addClass('active')
    $('.description').removeClass('open');
    $('.review').addClass('open');
  });

  $('.some-info').hover(
    function(){
      $('.crib').addClass('open-crib');
    },
    function(){
      $('.crib').removeClass('open-crib');
    });
  
  $('.slider-for').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.slider-nav',
  });
  $('.slider-nav').slick({
    slidesToShow: 2,
    slidesToScroll: 1,
    asNavFor: '.slider-for',
    dots: false,
    centerMode: false,
    focusOnSelect: true,
    vertical: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          vertical: false,
        }
      }
    ]
  });

  $('.recent-slider').slick({
    infinite: true,
    slidesToShow: 4,
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
        breakpoint: 1400,
        settings: {
          slidesToShow: 3,
          centerMode: false,
          arrows: true,
          variableWidth: false,
        }
      },
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

  $(".slick-arrow").empty();

    
  $('.write-review').on('click', function() {
    $('.write-review-pop').addClass('open-pop');
    $('.back-dark-pop').addClass('open-back-pop');
    $('body').css('overflow','hidden');
  });

});