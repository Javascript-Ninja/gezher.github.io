$(function() {
  $('.down-arrow').on('click', function() {
    $.smoothScroll({
      scrollTarget: $('.title-line'),
      speed: 400
    });
  });
});
