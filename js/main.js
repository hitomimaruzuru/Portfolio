$(function() {
  //メニュー選択した際の移動スピード
  $('a[href^="#"]').on('click', function() {
    var speed = 300;
    var href = $(this).attr("href");
    var target = $(href == "#" || href == "" ? 'html' : href);
    var position = target.offset().top;
    $("html, body").animate({
      scrollTop: position
    }, speed, "swing");
    return false;
  });

//ityped
ityped.init(document.querySelector("#ityped"), {
      loop: false,
      showCursor: false,
      strings: ["PORTFOLIO"]
    })

//waypoints
$(".animated").waypoint(function(direction) {
  if (direction === "down") {
    $(this.element).addClass("fadeInUp");
    this.destroy();
  }
}, { offset: "60%" });

//ナビゲーションバー途中で固定
  var $nav = $('#gnav');
  var offset = $nav.offset();
  var navHeight = $nav.innerHeight();
  $('.section').css('padding-top', navHeight / 2);

  $(window).on('resize', function() {
    var currentWidth = window.innerWidth;
    if (currentWidth == window.innerWidth) {
      // ウインドウ横幅が変わっていないため処理をキャンセル
      return;
    }
    $nav = $('#gnav');
    offset = $nav.offset();
    navHeight = $nav.innerHeight();
    $('.section').css('padding-top', navHeight / 2);
  });

  $(window).scroll(function() {
    if ($(window).scrollTop() >= offset.top) {
      $nav.addClass('fixed');
      $("#contents").css("margin-top", navHeight);
    } else {
      $nav.removeClass('fixed');
      $("#contents").css("margin-top", "0");
    }
  });

  //スライダー
  var swiper = new Swiper('.swiper-container', {
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  loop: true,
  observer: true,
  observeParents: true,
  autoHeight: false,
  pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
    },
    on: {
    slideChange: function () {
      jQuery('.swiper-slide-content').css('opacity', '0');
      realIndex = this.realIndex + 1;
      jQuery('.swiper-slide-content-' + realIndex).css('opacity', '1');
    },
  },
});
  //Skillずらして表示
  $('#skill .card').css("opacity","0");
    $(window).scroll(function (){
    $('#skill .card').each(function(){

       var elemPos = $(this).offset().top;
       var scroll = $(window).scrollTop();
       var windowHeight = $(window).height();
   if (scroll > elemPos - windowHeight + windowHeight/6){
    $(function(){
    $('#skill .card')
        .each(function(i){
         $(this).delay(500*i).animate({opacity:1}, 1500);
        });
       });
       }
    });
  });


});
