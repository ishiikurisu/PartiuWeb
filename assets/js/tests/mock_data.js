describe('Mock Data', function() {
    describe('List Places', function() {
        it('Should return an error if nothing is found', function() {
            mockListPlaces("something that doesn't exist", function(result) {
                chai.assert.equal("no results", result.error);
            });
        });

        it('Should return no  error and a list of places if it finds something', function() {
            mockListPlaces("Coke", function(result) {
                chai.assert.equal(null, result.error);
                chai.assert.equal(2, result.places.length);
            });
        });
    });

    describe('List Items', function() {
        it('Should return an error if id belongs to no place', function() {
            mockListItems(-1, function(result) {
                chai.assert.equal("no such place", result.error);
            });
        });

        it('Should return no error and a list of items if place exists', function() {
            mockListItems(1, function(result) {
                chai.assert.equal(2, result.items.length);
            });
        });
    });
});
