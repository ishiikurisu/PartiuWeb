function main() {
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
            markerColor: 'white',
            iconColor: 'orange',
            prefix: 'fa'
        });
        for (var i = 0; i < places.length ; i++) {
            var place = places[i];
            var marker = L.marker(place.where, {icon: redMarker});
            marker.addTo(map);
            marker.bindPopup();
        }
    });
}
