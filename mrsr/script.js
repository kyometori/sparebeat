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

$(document).ready(async () => {
  await $(".maps").next().html(await toTable(songs));

  const mp = $(".main").html();
  const about = $(".about").html();
  $("#title").hide(0);
  $("#title h1").hide(0);
  $(".nav").hide(0);
  $(".main").hide(0);

  setTimeout(() => {
    $("#title").animate({opacity: 'show'}, 200);
  }, 300);

  setTimeout(() => {
    $(".nav").animate({height: 'show', opacity: 'show'}, 500);
  }, 800);

  setTimeout(() => {
    $(".main").animate({opacity: 'show'}, 500);
  }, 1500);

  setTimeout(() => {
    $("#title h1").animate({opacity: 'show'}, 700);
  }, 2100);

  $(this).remove(".about");
  $("#mp").click(function() {
    $(".main").html(mp);
  })
  $("#ab").click(function() {
    $(".main").html(about);
  });
  $("#title").dblclick(function() {
    $(".nav").animate({height: 'toggle', opacity: 'toggle'});
  });
});
