$(function () {
  $(window).on('scroll', function () {
    const sliderHeight = $('.js-top-hero').height();
    if (sliderHeight / 10 < $(this).scrollTop()) {
      $('#header').addClass('is-scrolled');
    } else {
      $('#header').removeClass('is-scrolled');
    }
  })

  $('.js-toggle-hamburger-menu').on('click', function () {
    $(this).toggleClass('is-active');
    $('.js-toggle-menu').toggleClass('is-active');
    $('#top-page .js-header').toggleClass('is-default-color');
  });

  // リンク押下後のスクロール位置は、selector - ヘッダの長さ
  $('.js-menu-link').on('click', function (e) {
    // 移動先の位置を取得
    const headerHeight = $('header').innerHeight();
    const toPosition = $($(this).attr('href')).offset().top - headerHeight;
    const isMobile = $('.js-toggle-hamburger-menu').is(':visible');
    if (isMobile) {
      $('body, html').animate({ scrollTop: toPosition }, 100, 'swing', function () {
        $('.js-toggle-hamburger-menu').removeClass('is-active');
        $('.js-toggle-menu').removeClass('is-active');
      });
    } else {
      $('body, html').animate({ scrollTop: toPosition }, 1000, 'swing');
    }
    return false;
  });
})
