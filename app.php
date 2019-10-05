<?php
    $data = $_POST["data"];
    $arr = array('value' => "Hello : " . $data);
    header("Content-Type: application/json; charset=utf-8");
    echo json_encode($arr);
?>
