document.getElementById("btnAdd").onclick = function() {
    var list = document.getElementById("list");
    var flagment = document.createDocumentFragment(); //createDocumentFragment 创建一个临时空间。
    for (var i = 0; i < 1000; i++) {
        var li = document.createElement("li");
        li.textContent = '我是第' + i + '人';
        flagment.appendChild(li);
    }
    list.appendChild(flagment);
}