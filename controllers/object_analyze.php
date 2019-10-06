<?php
    $output = "";
    //$arg = "../dump/dump2/sample1.txt";
    $arg1 = $_POST["file"];
    $arg2 = $_POST["obj_name"];
    exec("python3 object_analyze.py " . $arg1 . " " . $arg2, 
         $output);
    header("Content-Type: application/text; charset=utf-8");
    echo implode("\n", $output);
?>