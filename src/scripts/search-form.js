var arrayAutocomplete = [];
var arrayPrim = [];
var arrayList = [];
function searchForm(){
    var ajax = new XMLHttpRequest();
    ajax.open("GET", "books-schema.json", true);
    ajax.onload = function() {
        var json = JSON.parse(ajax.responseText).data;
        for (var i=0; i < json.length; i++) {
            arrayAutocomplete.push(json[i].title);
            arrayList.push(json[i]);
        }

        for (var i=0; i < 9; i++) {
            arrayPrim.push(json[i]);
        }
        listSearch(arrayPrim);
        new Awesomplete(document.querySelector("#InputSearch"),{ list: arrayAutocomplete });
    };
    ajax.send();
}

function listSearch(arrayPrim) {
    var div = document.getElementsByClassName('divClass')[0];
    div.innerHTML = '';
    for(var i=0; i<arrayPrim.length; i++){
        var card = document.createElement('div');
        card.setAttribute('class', 'card_inline');

        var h2 = document.createElement('h3');
        var span = document.createElement('span');
        var br = document.createElement('br');
        var imagen = document.createElement('img');
        imagen.setAttribute('src', arrayPrim[i].image);
        imagen.setAttribute('class', 'img_inline');

        var titleCard = document.createTextNode(arrayPrim[i].title);
        var fechaPub = document.createTextNode(arrayPrim[i].date_pub);

        h2.appendChild(titleCard);
        span.appendChild(fechaPub);

        card.appendChild(h2);
        card.appendChild(span);
        card.appendChild(br);
        card.appendChild(imagen);
        div.appendChild(card);
    }
}

function validarButton (value, event) {
    if (value.length > 2 ) {
        document.getElementById('buttonSearch').disabled = false;
        document.getElementById('buttonSearch').removeAttribute('class');
        document.getElementById('buttonSearch').setAttribute('class','button_search');
        if (event.keyCode === 13) {
            search();
        }
    } else {
        document.getElementById('buttonSearch').disabled = true;
        document.getElementById('buttonSearch').removeAttribute('class');
        document.getElementById('buttonSearch').setAttribute('class','button_search_disabled');
    }
}

function search () {
    value = document.getElementById('InputSearch').value.toLowerCase();
    var arraySearch = [];
    for (var i = 0; i < arrayList.length; i++) {
        var n = arrayList[i].title.toLowerCase().search(value);
        if (n >= 0) {
            arraySearch.push(arrayList[i]);
        } 
    }
    listSearch(arraySearch);
}
