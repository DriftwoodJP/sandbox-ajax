document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('btn').addEventListener('click', function() {
    var result = document.getElementById('result');
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
      xhr.addEventListener('loadstart', function() {
        result.textContent = '通信中...';
      }, false);

      xhr.addEventListener('load', function() {
        var data = JSON.parse(xhr.responseText);
        show(data);
      }, false);

      xhr.addEventListener('error', function() {
        result.textContent = 'サーバエラーが発生しました。';
      }, false);
    };
    xhr.open('GET', 'bm.php?url=' +
      encodeURIComponent(document.getElementById('url').value), true);
    xhr.send(null);
  }, false);
}, false);

function show(data) {
  if (data === null) {
    result.textContent = 'ブックマークは存在しませんでした。';
  } else {
    // result.textContent = data;
    var bms = data.bookmarks;
    var ul = document.createElement('ul');
    for (var i = 0; i < bms.length; i++) {
      var li = document.createElement('li');
      var anchor = document.createElement('a');
      anchor.href = 'http://b.hatena.ne.jp/' + bms[i].user;
      var text = document.createTextNode(bms[i].user + ' ' + bms[i].comment);
      anchor.appendChild(text);
      li.appendChild(anchor);
      ul.appendChild(li);
    }
    result.replaceChild(ul, result.firstChild);
  }
}
