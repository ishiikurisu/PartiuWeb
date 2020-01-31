function filter(x, f) {
    var o = [];
    for (var i = 0; i < x.length; i++) {
        var xi = x[i];
        if (f(xi)) {
            o.push(xi);
        }
    }
    return o;
}

function map(x, f) {
    var o = [];
    for (var i = 0; i < x.length; i++) {
        o.push(f(x[i]));
    }
    return o;
}

function lincludes(l, x) {
    for (var i = 0; i < l.length; i++) {
        if (l[i] === x) {
            return true;
        }
    }
    return false;
}
