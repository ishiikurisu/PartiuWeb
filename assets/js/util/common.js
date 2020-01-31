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
