describe('Mock Data', function() {
    describe('List Places', function() {
        it('Should return an error if nothing is found', function() {
            mockListPlaces("something that doesn't exist", function(result) {
                chai.assert.equal(result.error, "no results");
            });
        });

        it('Should return no  error and a list of places if it finds something', function() {
            mockListPlaces("Coke", function(result) {
                chai.assert.equal(result.error, null);
                chai.assert.equal(result.places.length, 2);
            });
        });
    });
});
