<?php
    $output = "";
    //$arg = "../dump/dump2/sample1.txt";
    $arg = $_POST["data"];
    exec("python3 objects_get.py " . $arg, $output);
    header("Content-Type: application/json; charset=utf-8");
    echo $output[0];
?>
