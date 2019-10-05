<!DOCTYPE html>
<html>
  <head>
    <title>PHP Study</title>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
  </head>
  <body>
    <script type="text/javascript" src="hello.js"></script>
    <?php 
        echo '<h2 id="cgi_text"> Hello : ' . '</h2>'; 
    ?>
    <p>Names : <br>
    <form id="form1" method="post" action="">
      <select name="Names" size="1">
        <option value="None"></option>
        <option value="Alice">アリス</option>
        <option value="Bianka">ビアンカ</option>
        <option value="Catherine">キャサリン</option>
      </select>
    </form>
    </p>
  </body>
</html>
