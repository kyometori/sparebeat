let i = 0;

$(document).ready(function(){
  $(".main h1 span").text("▼");

  $("thead").click(function() {
    $(this).parent().children("tbody").toggle(500);
  });

  $(".main h1").click(function() {
    $(this).next("table").animate({height: 'toggle', opacity: 'toggle'});
    $(this).children(".arrow").text() === "▼" ? $(this).children(".arrow").text("▲")
                                              : $(this).children(".arrow").text("▼");
  });

  $(".title").dblclick(function() {
    i++ >= 10 ? alert('太閒喔') : $(".main").animate({height: 'toggle', opacity: 'toggle'});
  });
});
