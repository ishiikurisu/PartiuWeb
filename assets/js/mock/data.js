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
            {
                id: 1,
                price: 3.99
            }, {
                id: 2,
                price: 32.00
            }
        ]
    }, {
        id: 2,
        name: "Papelaria",
        where: [-27.58634, -48.52473],
        items: [
            {
                id: 3,
                price: 2
            }
        ]
    }, {
        id: 3,
        name: "Big",
        where: [-27.58988, -48.51531],
        items: [
            {
                id: 1,
                price: 5
            }, {
                id: 3,
                price: 3
            }
        ]
    }
];

const fakeUsers = [
    {
        "email": "admin@crisjr.eng.br",
        "password": "asdf",
    }, {
        "email": "user@example.net",
        "password": "asdf"
    }
]

function mockGet(collection, id) {
    var result = null;
    for (var i = 0; i < collection.length; i++) {
        var maybe = collection[i];
        if (maybe.id === id) {
            result = maybe;
            break;
        }
    }
    return result;
}

function mockGetItem(itemId) {
    return mockGet(fakeItems, itemId);
}

function mockGetPlace(placeId) {
    return mockGet(fakePlaces, placeId);
}

function mockListPlaces(query, callback) {
    var items = filter(fakeItems, function(item) {
        return item.name.toUpperCase().includes(query.toUpperCase());
    });
    var places = filter(fakePlaces, function(place) {
        var filteredItems = filter(items, function(item) {
            var itemsFromPlace = map(place.items, function(i) { return i.id; });
            return lincludes(itemsFromPlace, item.id);
        });
        return filteredItems.length > 0
    });
    var error = (places.length === 0)? "no results" : null;

    callback({
        error: error,
        places: places
    });
}

function mockListItems(placeId, callback) {
    var error = null;
    var items = null;
    var targetPlace = mockGetPlace(placeId);

    if (targetPlace !== null) {
        items = map(targetPlace.items, function(item) {
            var itemInfo = mockGetItem(item.id);
            return {
                id: itemInfo.id,
                name: itemInfo.name,
                price: item.price
            };
        });
    } else {
        error = "no such place";
    }

    callback({
        error: error,
        items: items
    });
}

function mockLogin(email, password, callback) {
    var authentication = filter(fakeUsers, function(userData) {
        return userData.email === email && userData.password === password;
    });
    callback({
        error: (authentication.length === 0)? "login failed" : null,
        authentication: authentication
    })
}
