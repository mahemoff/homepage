$(function() {
  $("#projects li").hover(
    function() { $('img', this).fadeIn(); }, function() { $('img', this).fadeOut(); }
  );
});
