const calculateNumber = require('./0-calcul')
const assert = require('assert')

describe('calculateNumber', () => {
    it('if a result is true', () => {
        assert.strictEqual(calculateNumber(1, 3), 4)
      });
    it('passing caluclate number', () => {
        assert.strictEqual(calculateNumber(1, 3.7), 5)
    });
    it('passing caluclate number', () => {
        assert.strictEqual(calculateNumber(1.2, 3.7), 5)
    });
    it('passing the round', () => {
        assert.strictEqual(calculateNumber(1.5, 3.7), 6)
    });
    it('passeing zero', () => {
        assert.strictEqual(calculateNumber(0, 0), 0)
    });
    it('passing negative', () => {
        assert.strictEqual(calculateNumber(-1, -3), -4)
    });
    it('passing negative round', () => {
        assert.strictEqual(calculateNumber(-1.2, -1.6), -3)
    })

});
