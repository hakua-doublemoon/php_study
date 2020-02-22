<?php
    $output = "";
    //$arg = "../dump/dump2/sample1.txt";
    $arg1 = $_POST["file"];
    $arg2 = $_POST["obj_name"];
    exec("python3 object_analyze.py " . $arg1 . " " . $arg2, 
         $output);

    $outputs = implode("\n", $output);

    $data = array();
    while (count($output) > 0) {
        $elm = array_shift($output);
        if (strpos($elm, "-----") !== false) {
            break;
        }
        $data[] = $elm;
    }

    $debug = array();
    while (count($output) > 0) {
        $elm = array_shift($output);
        $debug[] = $elm;
    }

    $data_join = implode("\n", $data);
    $debug_join = implode("\n", $debug);

    $obj = array('data' => $data_join, 'debug' => $debug_join, 'output' => $outputs);

    header("Content-Type: application/text; charset=utf-8");
    //echo implode("\n", json_encode($obj));
    echo json_encode($obj);
?>
