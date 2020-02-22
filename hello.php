<!DOCTYPE html>
<html>
  <head>
    <title>PHP Study</title>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
  </head>
  <body>
    <script type="text/javascript" src="hello.js"></script>
    <script type="text/javascript" src="sub_views/obj_parse.js" async></script>
    <link rel="stylesheet" type="text/css" href="hello.css" media="print" onload="this.media='all'">
    <!--?php 
        echo '<h2 id="cgi_text"> Hello : ' . '</h2>'; 
    ?-->
    <div class="box" id="fs_div">
      <p>Names:</p>
      <form id="form1" method="post" action="">
        <select id="file_select" size="1">
          <option></option>
        </select>
      </form>
    </div>
    <div class="box" id="os_div">
      <p>Objects:</p>
      <form id="form2" method="post" action="">
        <select id="obj_select" size="1">
          <option></option>
        </select>
      </form>
    </div>
    <table id="obj_table">
      <tr> <th>#</th> </tr>
    </table>

    <hr>
    <div id="dbg_str"></div>

  </body>
</html>

