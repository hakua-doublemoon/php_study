var obj_select_on_change_impl = function(param)
{
    console.log(param.obj_name);
    $("#obj_table").empty();
    $.post("controllers/object_analyze.php", param, (data) => {
        console.log(data);
        var tbl_str = ""
        var lines = data.split("\n");
        var tag_s = "<th>";
        var tag_e = "</th>"
        for (var lidx in lines) {
            tbl_str += "<tr>" + tag_s
                     + lines[lidx].replace(",", tag_e+tag_s);
                     + tag_e + "</tr>";
            if (lidx == 0) {
                tag_s = "<td>";
                tag_e = "</td>";
            }
        }
        $(tbl_str).appendTo("#obj_table");
        //$('tbody').append(tbl_str);
    });
}

window.obj_select_on_change_impl = obj_select_on_change_impl;
