<form method="POST" action="hello.php">
  <label for="name">Name:</label>
  <input type="text" name="name" size="15">
  <input type="submit" name="submit" value="Submit!">
</form>
<?php
if ($_REQUEST['submit'] !== null) {
  // sleep(3);
  print('こんにちは ' . htmlspecialchars($_POST['name'], ENT_QUOTES | ENT_HTML5, 'UTF-8') . 'さん！');
}
?>
