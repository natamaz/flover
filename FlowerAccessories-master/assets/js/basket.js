$(document).ready(function(){

    $('.delete-product').on('click', function() {
      $(this).parent().parent().remove()
    });

    $('.to-step2').on('click', function() {
      $('.step1').css('display', 'none');
      $('.step2').css('display', 'block');
    });

    $('.save-pop').on('click', function() {
      $('.pop-save-order').addClass('open-pop');
      $('.back-dark-pop').addClass('open-back-pop');
      $('body').css('overflow','hidden');
    });

    
    $('.open-order-ok').on('click', function() {
      $('.pop-order-fine').addClass('open-pop');
      $('.back-dark-pop').addClass('open-back-pop');
      $('body').css('overflow','hidden');
    });

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
});