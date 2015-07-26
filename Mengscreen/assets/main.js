 (function($) {
  $.fn.loading = function(options) {
    resize();
  };
  var resize = function() {
    $('#container').css({
      "left": $(window).width() * Math.random() - ($('#container').outerWidth() / 2),
      "top": $(window).height() * Math.random() - ($('#container').outerHeight() / 2)
    });
  };
  $(window).load(function() {
    resize();
    $(window).resize(function() {
      resize();
    });
  });
  setInterval(resize, 2000);
}(jQuery));
$('#frame').loading();