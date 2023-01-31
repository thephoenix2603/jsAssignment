(function (){
    var body=document.getElementsByTagName("body")[0];

    var table = document.createElement("table");
    table.setAttribute("border","2");
    table.style.width="100%";

    var headR = document.createElement("tr");
    var headers = ["Name","Age","DOB","Email","Company"];
    headers.forEach(function (header){
        var th = document.createElement("th");
        th.style.fontWeight="bold";
        th.appendChild(document.createTextNode(header));
        headR.appendChild(th);
    });
    table.appendChild(headR);

    for(var i=0;i<5;i++){
        var tr=document.createElement("tr");
        tr.appendChild(createTd("Khushi"));
        tr.appendChild(createTd("19"));
        tr.appendChild(createTd("01/10/2003"));
        tr.appendChild(createTd("khushi22@gmail.com"));
        tr.appendChild(createTd("Iliionsy"));
        table.appendChild(tr);
    }

    body.appendChild(table);

    function createTd(data){
        var td=document.createElement("td");
        td.appendChild(document.createTextNode(data));
        return td;
    }
})();