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

class song {
  constructor(title, artist, { easy, normal, hard }, isin = false) {
    this.title = title;
    this.artist = artist;
    this.easy = easy;
    this.normal = normal;
    this.hard = hard;
    this.in = isin;
  }
  toString() {
    if(this.in) return `<tr class="in"><td><a href="${this.title}">${this.title}</a></td><td>${this.artist}</td><td>${this.easy}</td><td>${this.normal}</td><td>${this.hard}</td></tr>`;
    return `<tr><td><a href="${this.title}">${this.title}</a></td><td>${this.artist}</td><td>${this.easy}</td><td>${this.normal}</td><td>${this.hard}</td></tr>`;
  }
}

const toTable = arr => {
  let text;
  text = "<thead><th>Title</th><th>Artist</th><th>Easy</th><th>Normal</th><th>Hard</th></thead><tbody>";
  arr.forEach(so => {
    text += so.toString();
  });
  text += "</tbody>";
  return text;
}

const unlock = () => {
  const maps = document.getElementsByClassName("in");
  for(const map of maps) {
    map.style.display = "table-row";
  }
  return "You successfully unlock all hidden maps! Try it now!";
}

const songs = [
  new song("You can kiss me and hurt me (Remix)", "Xin Xu", {
    easy: " -",
    normal: " -",
    hard: "13",
  }),
  new song("黑人抬棺材", "黑人", {
    easy: " -",
    normal: " -",
    hard: " 13"
  }),
  new song("渦狀銀河のシンフォニエッタ", "山本真央樹", {
    easy: " -",
    normal: " -",
    hard: "14"
  }),
  new song("Arty Party", "yaseta", {
    easy: " -",
    normal: "14+",
    hard: "14+"
  }),
  new song("Fragrance", "Tsukasa(Arte Refact)", {
    easy: " -",
    normal: " -",
    hard: "16"
  })
];

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
