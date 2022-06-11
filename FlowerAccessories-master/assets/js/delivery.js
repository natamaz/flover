  $(document).ready(function(){

  $('.slider-delivery > div').on('click', function() {

    $('.slider-delivery > div').removeClass('active');

    $(this).parent().parent().find(".all-blocks").removeClass().addClass("all-blocks");
    var $thisClass = $(this).attr("class");
    var $some = $(this).parent().parent().find(".all-blocks").addClass($thisClass + "-show");


    $(this).addClass('active');
  });
  
  $('.mob').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    cssEase: 'linear',
    speed: 500,
    infinite: true,
    centerPadding: 0,
    touchThreshold: 100,
    // variableWidth: true,
    arrows: false,
  });


});