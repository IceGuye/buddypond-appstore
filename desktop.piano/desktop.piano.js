desktop.app.piano = {};
desktop.app.piano.label = 'piano';

desktop.app.piano.load = function loadpiano (params, next) {
  desktop.load.remoteAssets([
    'piano' // this loads the sibling desktop.app.piano.html file into <div id="window_piano"></div>
  ], function (err) {
    $('#window_piano').css('width', 662);
    $('#window_piano').css('height', 495);
    $('#window_piano').css('left', 50);
    $('#window_piano').css('top', 50);
    next();
  });
};

desktop.app.piano.openWindow = function openWindow () {
  return true;
};

desktop.app.piano.closeWindow = function closeWindow () {
  $('#pianoIframe').attr('src', 'desktop/apps/desktop.piano/vendor/index.html');
  return true;
};