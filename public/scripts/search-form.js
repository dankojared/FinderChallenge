function searchForm(){
    var arrayList = [];
    var arrayPrim = [];
    var ajax = new XMLHttpRequest();
    ajax.open("GET", "books-schema.json", true);
    ajax.onload = function() {
        var json = JSON.parse(ajax.responseText).data;
        for (var i=0; i < json.length; i++) {
            arrayList.push(json[i].title);
        }

        for (var i=0; i < 9; i++) {
            arrayPrim.push(json[i]);
        }
        listSearch(arrayPrim);
        new Awesomplete(document.querySelector("#InputSearch"),{ list: arrayList });
    };
    ajax.send();
}

function listSearch(arrayPrim) {
    console.log(arrayPrim);
    var div = document.getElementsByClassName('divClass')[0];
    for(var i=0; i<arrayPrim.length; i++){
        var card = document.createElement('div');
        div.appendChild(card);    
    }
}

function validarButton (value) {
    if (value.length > 2 ) {
        document.getElementById('buttonSearch').disabled = false;
    } else {
        document.getElementById('buttonSearch').disabled = true;
    }
}
