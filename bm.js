document.getElementById('btn').addEventListener('click', function() {
  var url = 'http://b.hatena.ne.jp/entry/jsonlite/?callback=show&url=' + encodeURIComponent(document.getElementById('url').value);
  var src = document.createElement('script');
  src.src = url;
  document.getElementsByTagName('body').item(0).appendChild(src);
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
    result.appendChild(ul);
  }
}
