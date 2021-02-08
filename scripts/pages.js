const copy = (str) => {
  const el = document.createElement('textarea');
  el.value = str;
  document.body.appendChild(el);
  el.select();
  document.execCommand('copy');
  el.remove();

  const tooltips = document.getElementsByClassName("tooltiptext");
  for(const tooltip of tooltips) {
    tooltip.innerHTML = "Copied ✓";
    tooltip.style.cssText = "background-color: #31941E;";
  }
}

const reset = (str) => {
  const tooltips = document.getElementsByClassName("tooltiptext");
  for(const tooltip of tooltips) {
    tooltip.innerHTML = str;
    tooltip.style.cssText = "background-color: #555";
  }
}

$(document).ready(() => {
  const mp = $(".main").html();
  const about = $(".about").html();
  const catein = $(".catein").html();
  const cl = $(".cl").html();

  $(this).remove(".about");
  $("#mp").click(function() {
    $(".main").html(mp);
  })
  $("#ab").click(function() {
    $(".main").html(about);
  });
  $("#ci").click(function() {
    $(".main").html(catein);
  });
  $("#cl").click(function() {
    $(".main").html(cl);
  });
  $("#title").dblclick(function() {
    $(".nav").animate({height: 'toggle', opacity: 'toggle'});
  });
});
