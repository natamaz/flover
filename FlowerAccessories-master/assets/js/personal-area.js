$(document).ready(function(){

  $('.top-tabs > li').on('click', function() {
    $('.top-tabs > li').removeClass('active-tab');
    $(this).addClass('active-tab');
  });

  $('.cont-info').on('click', function() {
    $('.cont-info-block').css('display', 'flex');
    $('.saved-order-block').css('display', 'none');
    $('.history-order-block').css('display', 'none');
  });

  $('.saved-order').on('click', function() {
    $('.cont-info-block').css('display', 'none');
    $('.saved-order-block').css('display', 'block');
    $('.history-order-block').css('display', 'none');
  });

  $('.history-order').on('click', function() {
    $('.cont-info-block').css('display', 'none');
    $('.saved-order-block').css('display', 'none');
    $('.history-order-block').css('display', 'flex');
  });

  $('.delete-product').on('click', function() {
    $(this).parent().parent().remove()
  });
  
  $('.top-info').on('click', function() {
    $(this).parent().toggleClass('opened-order');
  });




  function windowSize(){
    if ($(window).width() < '1280'){
      $( ".showText" ).click(function(event) {
        event.preventDefault();
       $('.hiddenText').stop().slideToggle();
      });
      $( ".hiddenText" ).click(function(event) {
          var x = $(this).text();
          var y = $(".showText").text();
            $(this).text(y);
            $(".showText").text(x);
          $('.hiddenText').stop().slideToggle();
      });
    } else {
      $('.bord').addClass('active')
      $( ".hiddenText" ).click(function() {
        $('.hiddenText').removeClass('active')
        $(this).addClass('active')
    });
    }
}
  $(window).on('load resize',windowSize);

});