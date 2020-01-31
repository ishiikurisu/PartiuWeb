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
 * Get a paramter from an URL
 * @param param the desired URL parameter
 * @returns an empty string if there is no parameter or
 *          the value that is associated with the key
 */
function getUrlParam(param) {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    return urlParams.get(param);
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


var map = L.map('mapid').setView([-27.5989, -48.5313], 14);
L.tileLayer('https://{s}.tiles.mapbox.com/v3/pinterest.map-ho21rkos/{z}/{x}/{y}.jpg', {
	maxZoom: 19,
	attribution: '&copy;'
}).addTo(map);

const q = getUrlParam('q');
listPlaces(q, function(result) {
    if (result.error === "no results") {
        alert("Nenhum produto encontrado!");
        return;
    }
    if (result.error === "internal error") {
        alert("Erro inesperado no serviço!");
        return;
    }

    // drawing filtered places
    var places = result.places;
    var redMarker = L.AwesomeMarkers.icon({
        icon: 'coffee',
        markerColor: 'red',
        iconColor: 'white'
    });
    for (var i = 0; i < places.length ; i++) {
        var place = places[i];
        var marker = L.marker(place.where, {icon: redMarker});
        marker.addTo(map);
    }
});
