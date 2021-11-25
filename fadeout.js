$(function(){
    $('.js-demo01-btn').click(function(){
      var speed = 500;
      var href= $(this).attr("href");
      var target = $(href == "#" || href == "" ? 'html' : href);
      var position = target.offset().top;
      $("html, body").animate({scrollTop:position}, speed, "swing");
      return false;
    });
    var scrollend = $('#demo01__area').offset().top ; //ページ上部からの距離を取得
    var distance = 0;
    $(document).scroll(function(){
      distance = $(this).scrollTop(); //スクロールした距離を取得
      if (scrollend <= distance) {
        $('.js-demo01-btn-area').fadeOut();
      } else{
        $('.js-demo01-btn-area').fadeIn();
      }
    });
  });