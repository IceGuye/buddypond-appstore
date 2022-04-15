desktop.app.hackertyper = {};
desktop.app.hackertyper.label = 'hackertyper';

desktop.app.hackertyper.load = function loadhackertyper (params, next) {
  desktop.load.remoteAssets([
    'hackertyper' // this loads the sibling desktop.app.hackertyper.html file into <div id="window_hackertyper"></div>
  ], function (err) {
    $('#window_hackertyper').css('width', 662);
    $('#window_hackertyper').css('height', 495);
    $('#window_hackertyper').css('left', 50);
    $('#window_hackertyper').css('top', 50);
    next();
  });
};

desktop.app.hackertyper.openWindow = function openWindow () {
  return true;
};

desktop.app.hackertyper.closeWindow = function closeWindow () {
  $('#hackertyperIframe').attr('src', 'desktop/apps/desktop.hackertyper/vendor/index.html');
  return true;
};