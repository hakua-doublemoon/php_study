var samples_root = "";
var sample_file = ""

var file_select_on_change = function(ev) {
    const index = ev.srcElement.selectedIndex;
    if (index == 0) {
        return;
    }
    const select_text = ev.srcElement[index].textContent;
    console.log(select_text);
    sample_file = samples_root + select_text;

    var obj_select = document.getElementById("obj_select");
    while (obj_select.firstChild) {
        obj_select.removeChild(obj_select.firstChild);
    }
    $.post("controllers/objects_get.php", {"data": sample_file}, (rsp) => {
        console.log("<= " + JSON.stringify(rsp));
        for (var idx in rsp.objs) {
            //console.log(JSON.stringify(data.files[idx]));
            var opt = document.createElement("option");
            opt.text = rsp.objs[idx].name;
            obj_select.appendChild(opt);
        }
        var param = {
            obj_name: obj_select.firstChild.text,
            file: sample_file,
        };
        window.obj_select_on_change_impl(param);
    });
}

var obj_select_on_change = function(ev) {
    const index = ev.srcElement.selectedIndex;
    const select_text = ev.srcElement[index].textContent;
    if (!select_text) {
        return;
    }
    var param = {
        obj_name: select_text,
        file: sample_file,
    };
    window.obj_select_on_change_impl(param);
}

window.onload = () => {
    $.post("controllers/search.php", {}, (data) => {
        //console.log("search.php <= " + JSON.stringify(data));
        var a_select = document.getElementById("file_select");
        for (var idx in data.files) {
            var opt = document.createElement("option");
            //console.log(JSON.stringify(data.files[idx]));
            opt.text = data.files[idx].name;
            a_select.appendChild(opt);
            samples_root = data.root;
        }
        a_select.addEventListener('change', file_select_on_change);

        var obj_select = document.getElementById("obj_select");
        obj_select.addEventListener('change', obj_select_on_change);
    });
}
