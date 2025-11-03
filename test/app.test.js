const Triangle = require('../src/app').Triangle;
const expect = require('chai').expect;

describe('Testing the Triangle Functions (3 sides)', function() {
    it('3. The area of the Triangle', function(done) {
        let t3 = new Triangle(3, 4, 5);  // ← les valeurs sont ici !
        expect(t3.getArea()).to.equal(6);
        done();
    });
});
