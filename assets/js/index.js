/**
 * Returns an array containing the [x, y] dimensions of the window
 */
function getWindowSize() {
    var win = window,
        doc = document,
        docElem = doc.documentElement,
        body = doc.getElementsByTagName('body')[0],
        x = win.innerWidth || docElem.clientWidth || body.clientWidth,
        y = win.innerHeight|| docElem.clientHeight|| body.clientHeight;
    return [x, y];
}


/**
 * Used to setup the main function
 */
function ready(fn) {
    if (document.readyState != 'loading'){
        fn();
    } else {
        document.addEventListener('DOMContentLoaded', fn);
    }
}


/**
 * Asks the service about a user query. Should set the pins on the map based on the user current location.
 * This is the reaction to a user asking a question to the system.
 */
function ask() {
    var q = document.getElementsByName('q')[0];
    listItems(q, function(result) {
        if (result.error === "no results") {
            alert("Nenhum produto encontrado!");
            return;
        }
        if (result.error === "internal error") {
            alert("Erro inesperado no serviço!");
            return;
        }
    });
}


/**
 * Starts the page by setting the map up
 */
function main() {
    var mymap = L.map('mapid').setView([-27.5989, -48.5313], 14);
    L.tileLayer('https://{s}.tiles.mapbox.com/v3/pinterest.map-ho21rkos/{z}/{x}/{y}.jpg', {
    	maxZoom: 19,
    	attribution: '&copy;'
    }).addTo(mymap);
}

ready(main);
