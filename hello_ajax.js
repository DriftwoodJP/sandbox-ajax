document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('btn').addEventListener('click', function() {
    var result = document.getElementById('result');
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
      xhr.addEventListener('loadstart', function() {
        result.textContent = '通信中...';
      }, false);

      xhr.addEventListener('load', function() {
        result.textContent = xhr.responseText;
      }, false);

      xhr.addEventListener('error', function() {
        result.textContent = 'サーバエラーが発生しました。';
      }, false);
    };
    xhr.open('POST', 'hello_ajax.php', true);
    xhr.setRequestHeader('content-type',
      'application/x-www-form-urlencoded;charset=UTF-8');
    xhr.send('name=' +
      encodeURIComponent(document.getElementById('name').value));
  }, false);
}, false);
