const { expect } = require('chai');
const { Triangle } = require('../src/app'); // adapte le chemin selon ton dossier

describe('Testing the Triangle Functions (3 sides)', function() {
    
    it('1. The sides of the Triangle', function(done) {
        let t1 = new Triangle(3, 4, 5);
        expect(t1.getSides()).to.deep.equal([3, 4, 5]);
        done();
    });

    it('2. The perimeter of the Triangle', function(done) {
        let t2 = new Triangle(3, 4, 5);
        expect(t2.getPerimeter()).to.equal(12); // 3 + 4 + 5
        done();
    });

});
