$(function() {
  // サイドバー位置固定
  $(window).on('load scroll', function() {
    fix_element();
  });
   
  function fix_element() {
    // 固定配置に使用する要素
    var fixWrapper = $('.js-fix-wrapper');
    var fix = $('.js-fix');
   
    // 要素がある場合のみ処理
    if(fixWrapper.length && fix.length) {
      var fixTop = fixWrapper.offset().top;
      var winScroll = $(window).scrollTop();
      // 対象位置を通過している場合
      if(winScroll > fixTop) {
        fix.addClass('is-fixed');
      } else {
        fix.removeClass('is-fixed');
      }
    }
  }

  // スクロールアニメーション
  $(function() {
    $('a[href^="#"]').click(function(){
      //スクロールのスピード
      var speed = 500;
      //リンク元を取得
      var href= $(this).attr("href");
      //リンク先を取得
      var target = $(href == "#" || href == "" ? 'html' : href);
      //リンク先までの距離を取得
      var position = target.offset().top;
      //スムーススクロール
      $("html, body").animate({scrollTop:position}, speed, "swing");
      return false;
    });
  });

  // 目次ハイライト
  $(window).on('scroll', function (){

    var elem01 = $('.dashboard h3');
    var elem02 = $('.app h3');
    var elem03 = $('.space h3');
    var elem04 = $('.link h3');
    var active = 'active';
    
    elem01.each(function () {
      var elemOffset = $(this).offset().top;
      var scrollPos = $(window).scrollTop();
      var wh = $(window).height();
  
      if(scrollPos > elemOffset - wh + (wh / 1.5) ){
        $('.menu_list').removeClass(active);
        $('.dash_li').addClass(active);
        $('.simple_scroll').removeClass('app_bg');
        $('.simple_scroll').addClass('dash_bg');
      }
    });

    elem02.each(function () {
      var elemOffset = $(this).offset().top;
      var scrollPos = $(window).scrollTop();
      var wh = $(window).height();
  
      if(scrollPos > elemOffset - wh + (wh / 1.5) ){
        $('.menu_list').removeClass(active);
        $('.app_li').addClass(active);
        $('.simple_scroll').removeClass('dash_bg space_bg');
        $('.simple_scroll').addClass('app_bg');
      }
    });

    elem03.each(function () {
      var elemOffset = $(this).offset().top;
      var scrollPos = $(window).scrollTop();
      var wh = $(window).height();
  
      if(scrollPos > elemOffset - wh + (wh / 1.5) ){
        $('.menu_list').removeClass(active);
        $('.space_li').addClass(active);
        $('.simple_scroll').removeClass('app_bg link_bg');
        $('.simple_scroll').addClass('space_bg');
      }
    });
    elem04.each(function () {
      var elemOffset = $(this).offset().top;
      var scrollPos = $(window).scrollTop();
      var wh = $(window).height();
  
      if(scrollPos > elemOffset - wh + (wh / 1.5) ){
        $('.menu_list').removeClass(active);
        $('.link_li').addClass(active);
        $('.simple_scroll').removeClass('space_bg');
        $('.simple_scroll').addClass('link_bg');
      }
    });
  
  });
});