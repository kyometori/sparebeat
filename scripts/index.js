'use strict';
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

const unlock = () => {
  const maps = document.getElementsByClassName("in");
  for(const map of maps) {
    map.style.display = "table-row";
  }
  return "You successfully unlock all hidden maps! Try it now!";
}

$(document).ready(async () => {
const mp = $(".main").html();
  const about = $(".about").html();
  const cl = $(".cl").html();
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
  $("#cl").click(function() {
    $(".main").html(cl);
  });
  $("#title").dblclick(function() {
    $(".nav").animate({height: 'toggle', opacity: 'toggle'});
  });
});
