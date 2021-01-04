let i = 0;

const switchArrow = element => {
  element.text() === "▼" ? element.text("▲")
                         : element.text("▼");
}

$(document).ready(() => {
  $(".main h1 span").text("▼");

  $("thead").click(function() {
    $(this).parent().children("tbody").toggle(500);
  });

  $(".main h1").click(function() {
    $(this).next("table").animate({height: 'toggle', opacity: 'toggle'});
    switchArrow($(this).children(".arrow"));
  });

  $(".title").dblclick(function() {
    i++ >= 10 ? alert('太閒喔') : $(".main").animate({height: 'toggle', opacity: 'toggle'});
  });
});
