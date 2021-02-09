Sparebeat.autoload();
const hash = md5(location.origin + "/");
const timelineURL = "https://sparebeat.com/embed/timeline/" + hash;
const timeline = document.getElementById('timeline');
timeline.setAttribute('src', timelineURL);
window.addEventListener('load', function () {
  document.getElementById('sparebeat').height = window.outerWidth < 990 ? 1280 : 640;
});
