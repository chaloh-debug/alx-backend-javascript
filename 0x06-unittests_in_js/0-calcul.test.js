const assert = require('assert');
const sumNums = require('./0-calcul');


describe('sumNums', () => {
    it('floating point whole numbers', () => {
        assert.strictEqual(sumNums(3.0, 4.0), 7);
    });

    it('rounding down fractional 1st number', () => {
        assert.strictEqual(sumNums(3.3, 4.0), 7);
    });

    it('rounding up fractional 1st number', () => {
        assert.strictEqual(sumNums(3.7, 4.0), 8);
    });

    it('rounding down fractional 2nd numbers', () => {
        assert.strictEqual(sumNums(3.0, 4.3), 7);
    });

    it('rounding up fractional 2nd numbers', () => {
        assert.strictEqual(sumNums(3.0, 4.7), 8);
    });

    it('rounding down fractional numbers', () => {
        assert.strictEqual(sumNums(3.3, 4.3), 7);
    });

    it('rounding up fractional numbers', () => {
        assert.strictEqual(sumNums(3.7, 4.6), 9);
    });
});