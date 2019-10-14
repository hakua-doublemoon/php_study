
var top_th_clicked = (data) => {
    var index_s = parseInt(data.srcElement.getAttribute('name'));
    var index_e = index_s + parseInt(data.srcElement.getAttribute('colspan'));
    var max_width = '1px';
    var font_color = 'rgba(255,255,255,0)'
    if (data.srcElement.collapse) {
        max_width = '10em';
        font_color = 'rgba(0,0,0,1)';
    }
    console.log(index_s + " - " + index_e);
    var ths = document.getElementsByTagName("th");
    for (var i in ths) {
        if (!ths[i].cellIndex) {
            continue;
        }
        if (ths[i].offsetTop < 10) {
            continue;
        }
        var idx = ths[i].cellIndex;
        console.log(idx);
        if (index_s <= idx && idx < index_e) {
            ths[i].style.maxWidth = max_width;
        }
    }
    var tds = document.getElementsByTagName("td");
    for (var i in tds) {
        if (!tds[i].cellIndex) {
            continue;
        }
        var idx = tds[i].cellIndex;
        console.log(idx);
        if (index_s <= idx && idx < index_e) {
            tds[i].style.maxWidth = max_width;
        }
    }
    data.srcElement.style.maxWidth = max_width;
    data.srcElement.style.color = font_color;
    data.srcElement.collapse = !data.srcElement.collapse;
}

var obj_select_on_change_impl = function(param)
{
    console.log(param.obj_name);
    $("#obj_table").empty();
    $.post("controllers/object_analyze.php", param, (data) => {
        console.log(data);
        var tbl_str = ""
        var lines = data.split("\n");
        var tag_s = "<th>";
        var tag_e = "</th>";
        var head_cnt = 0;
        var top_th = "class=\"top_th\"";
        for (var lidx in lines) {
            if (lidx > 0) {
                top_th = "";
                if (lines[lidx].charAt(0) != ',') {
                    break;
                }
            }
            head_cnt += 1;
            var keys = lines[lidx].split(/,/g);
            var klen = keys.length;
            var colspan = 0;
            tbl_str += "<tr>";
            for (var idx in keys) {
                var kix = parseInt(idx);
                if (kix+1 < klen && keys[kix] != "") {
                    if (keys[kix] == keys[kix+1]) {
                        colspan += 1;
                        continue;
                    }
                }
                tbl_str +=  `<th colspan=\"${colspan+1}\" `
                         + (colspan > 0 ? top_th+`name="${kix-colspan}"` : "") 
                         + ">"
                         + keys[kix]
                         + `</th>`;                        
                colspan = 0;
            }
            tbl_str += "</tr>";
        }
        tag_s = "<td>";
        tag_e = "</td>";
        for (var lidx in lines) {
            if (lidx < head_cnt) {
                continue;
            }
            tbl_str += "<tr>" + tag_s
                     + lines[lidx].replace(/,/g, tag_e+tag_s);
                     + tag_e + "</tr>";
        }
        var prc = $.when(
            $(tbl_str).appendTo("#obj_table")
        );
        prc.done( () => {
            console.log("after prc");
            var tops = document.getElementsByClassName("top_th");
            for (var i in tops) {
                if (tops[i].addEventListener) {
                    tops[i].addEventListener('click', top_th_clicked);
                    tops[i].collapse = false;
                    console.log(tops[i]);    
                }
            }
        });
    });
}

window.obj_select_on_change_impl = obj_select_on_change_impl;
