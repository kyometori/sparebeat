$(document).ready(() => {
  $("#title").dblclick(function() {
    $(".nav").animate({height: 'toggle', opacity: 'toggle'});
  });
});
