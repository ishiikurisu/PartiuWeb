const fakeItems = [
    {
        id: 1,
        name: "coke"
    },
    {
        id: 2,
        name: "burger",
    },
    {
        id: 3,
        name: "glue"
    }
];

const fakePlaces = [
    {
        id: 1,
        name: "Usina",
        where: [-27.58972, -48.52192],
        items: [
            1,
            2
        ]
    },
    {
        id: 2,
        name: "Papelaria",
        where: [-27.58634, -48.52473],
        items: [
            3
        ]
    },
    {
        id: 3,
        name: "Big",
        where: [-27.58988, -48.51531],
        items: [
            1,
            3
        ]
    },
];

function mockListPlaces(query, callback) {
    var items = filter(fakeItems, function(item) {
        return item.name.toUpperCase().includes(query.toUpperCase());
    });
    var places = filter(fakePlaces, function(place) {
        var filteredItems = filter(items, function(item) {
            return lincludes(place.items, item.id);
        });
        return filteredItems.length > 0
    });
    var error = (places.length === 0)? "no results" : null;

    callback({
        error: error,
        places: places
    });
}
