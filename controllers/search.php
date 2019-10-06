<?php
    function folder_path_get($root, $target) {        
        foreach (glob($root . "/*") as $file_path) {
            if (is_dir("./" . $file_path)) {  
                $ret = folder_path_get($file_path, $target);  
                if ($ret === "found") {
                    return $file_path;
                }
            } else {
                if (strpos($file_path, $target)) {
                    return "found";
                }
            }
            return "";
        }
    }
    $sample_folder = folder_path_get("../dump", "sample1.txt") . "/";

    $samples = array();
    foreach (glob($sample_folder . "sample*") as $file_path) {
        $file = str_replace($sample_folder, "", $file_path);
        $elm = array("name" => $file);
        $samples[] = $elm;
    }

    $arr = array('root' => $sample_folder, 'files' => $samples, 'pwd' => getcwd());
    header("Content-Type: application/json; charset=utf-8");
    echo json_encode($arr);
?>
