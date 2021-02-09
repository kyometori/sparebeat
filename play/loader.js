Sparebeat.autoload();
var hash = md5(location.origin + "/");
var timelineURL = "https://sparebeat.com/embed/timeline/" + hash;
document.getElementById('timeline').src = timelineURL;
window.addEventListener('load', function () {
  document.getElementById('sparebeat').height = window.outerWidth < 990 ? 1280 : 640;
});
