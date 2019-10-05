
window.onload = () => {
    var a_select = document.getElementById("form1");
    a_select.addEventListener('change',
        (ev) => {
            const index = ev.srcElement.selectedIndex;
            if (index == 0) {
                return;
            }
            const select_text = ev.srcElement[index].textContent;
            console.log(select_text);
            $.post("app.php", {"data": select_text}, (data) => {
                console.log("app.php <=" + JSON.stringify(data));
                var a_p = document.getElementById("cgi_text");
                a_p.textContent = data.value;
            });
        }
    )
}
