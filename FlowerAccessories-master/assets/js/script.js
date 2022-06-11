$(document).ready(function(){

  $('body').css('opacity','1')

  $('.open').on('click', function() {
    $('nav').addClass('open-nav');
  });
  $('.close-nav').on('click', function() {
    $('nav').removeClass('open-nav');
  });

  $('.button-circle').on('click', function() {
    $('.search > input').addClass('open-input');
  });

  $(".quantity-arrow-minus").bind("click", function(){
    var $quantityNum = $(this).parent().parent().find(".quantity-num");
      if ($quantityNum.val() > 1){
        $quantityNum.val(+$quantityNum.val() - 1);
      }
    });
    $(".quantity-arrow-plus").bind("click", function(){
    var $quantityNum = $(this).parent().parent().find(".quantity-num");
        $quantityNum.val(+$quantityNum.val() + 1);
    });





    function windowSize(){
      if ($(window).width() < '1280'){

        $('.catalog-mob').hover(
          function(){
            $('.catalog-mob > ol').css('display','block');
            $('.arr').css('transform','rotate(270deg)');
          },
          function(){
            $('.catalog-mob > ol').css('display','none');
            $('.arr').css('transform','rotate(180deg)');
          });

          $('.info-mob').hover(
            function(){
              $('.info-mob > ol').css('display','block');
              $('.arr').css('transform','rotate(270deg)');
            },
            function(){
              $('.info-mob > ol').css('display','none');
              $('.arr').css('transform','rotate(180deg)');
          });

      } else {

        $('.catalog-mob').on('click', function() {
          $('.catalog-mob').toggleClass('act-mob')
        });
        $('.info-mob').on('click', function() {
          $('.info-mob').toggleClass('act-mob')
        });

      }
  }

  $('.catalog-mob1').on('click', function() {
    $('.catalog-mob1').toggleClass('act-mob')
  });
  $('.info-mob1').on('click', function() {
    $('.info-mob1').toggleClass('act-mob')
  });

  $(window).on('load resize',windowSize);

  $('.close-pop').on('click', function() {
    $('.pop-up').removeClass('open-pop');
    $('.basket-pop').removeClass('open-pop');
    $('.back-dark-pop').removeClass('open-back-pop');
    $('body').css('overflow','auto');
  });

  $('.back-dark-pop').on('click', function() {
    $('.pop-up').removeClass('open-pop');
    $('.basket-pop').removeClass('open-pop');
    $('.back-dark-pop').removeClass('open-back-pop');
    $('body').css('overflow','auto');
  });


  $('.entry').on('click', function() {
    $('.entrance').addClass('open-pop');
    $('.back-dark-pop').addClass('open-back-pop');
    $('body').css('overflow','hidden');
  });

  $('.registration').on('click', function() {
    $('.registration-pop').addClass('open-pop');
    $('.back-dark-pop').addClass('open-back-pop');
    $('body').css('overflow','hidden');
  });


  $('.go-to-registr').on('click', function() {
    $('.entrance').removeClass('open-pop');
    $('.registration-pop').addClass('open-pop');
  });  

  $('.go-to-entry').on('click', function() {
    $('.entrance').addClass('open-pop');
    $('.registration-pop').removeClass('open-pop');
  });  


  $('.polit').on('click', function() {
    $('.politic-pop').addClass('open-pop');
    $('.back-dark-pop').addClass('open-back-pop');
    $('body').css('overflow','hidden');
  });


  $('.delete-product-head').on('click', function() {
    $(this).parent().remove()
  });

});