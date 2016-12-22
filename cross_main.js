document.addEventListener('DOMContentLoaded', function() {
  var target = 'http://www.d-wood.com';

  document.getElementById('btn').addEventListener('click', function() {
    document.getElementById('frame').contentWindow.postMessage(
    document.getElementById('message').value, target);
  }, false);

  window.addEventListener('message', function(e) {
    if (e.origin !== target) { return; }
    console.log(e.data);
  }, false);
}, false);
