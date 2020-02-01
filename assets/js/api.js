/**
 * Provides an answer to an user query regarding itens
 * @param q The query the user wants to know about
 * @param callback a function that will deal with the results of the query
 */
function listPlaces(q, callback) {
    // TODO Call the real API instead of using mock data
    mockListPlaces(q, callback);
}

/**
 * Provides an answer to an user query regarding itens
 * @param q The query the user wants to know about
 * @param callback a function that will deal with the results of the query
 */
function listItems(placeId, callback) {
    // TODO Call the real API instead of using mock data
    mockListItems(placeId, callback);
}
