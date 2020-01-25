function getWindowSize() {
    var win = window,
        doc = document,
        docElem = doc.documentElement,
        body = doc.getElementsByTagName('body')[0],
        x = win.innerWidth || docElem.clientWidth || body.clientWidth,
        y = win.innerHeight|| docElem.clientHeight|| body.clientHeight;
    return [x, y];
}

/* MAIN CALL */
var mymap = L.map('mapid').setView([-27.5989, -48.5313], 14);
L.tileLayer('https://{s}.tiles.mapbox.com/v3/pinterest.map-ho21rkos/{z}/{x}/{y}.jpg', {
	maxZoom: 19,
	attribution: '&copy;'
}).addTo(mymap);
