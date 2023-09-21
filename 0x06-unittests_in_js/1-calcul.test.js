const assert = require('assert');
const calcNums = require('./1-calcul');


describe('calcNums', () => {
    describe('type = "SUM"', () => {
        it('floating point whole numbers', () => {
            assert.strictEqual(calcNums('SUM', 3.0, 4.0), 7);
        });

        it('rounding down fractional 1st number', () => {
            assert.strictEqual(calcNums('SUM', 3.3, 4.0), 7);
        });

        it('rounding up fractional 1st number', () => {
            assert.strictEqual(calcNums('SUM', 3.7, 4.0), 8);
        });

        it('rounding down fractional 2nd numbers', () => {
            assert.strictEqual(calcNums('SUM', 3.0, 4.3), 7);
        });

        it('rounding up fractional 2nd numbers', () => {
            assert.strictEqual(calcNums('SUM', 3.0, 4.7), 8);
        });

        it('rounding down fractional numbers', () => {
            assert.strictEqual(calcNums('SUM', 3.3, 4.3), 7);
        });

        it('rounding up fractional numbers', () => {
            assert.strictEqual(calcNums('SUM', 3.7, 4.6), 9);
        });
    });
    describe('type = "SUBTRACT"', () => {
        it('floating point whole numbers', () => {
            assert.strictEqual(calcNums('SUBTRACT', 3.0, 4.0), -1);
        });

        it('rounding down fractional 1st number', () => {
            assert.strictEqual(calcNums('SUBTRACT', 3.3, 4.0), -1);
        });

        it('rounding up fractional 1st number', () => {
            assert.strictEqual(calcNums('SUBTRACT', 3.7, 4.0), 0);
        });

        it('rounding down fractional 2nd numbers', () => {
            assert.strictEqual(calcNums('SUBTRACT', 3.0, 4.3), -1);
        });

        it('rounding up fractional 2nd numbers', () => {
            assert.strictEqual(calcNums('SUBTRACT', 3.0, 4.7), -2);
        });

        it('rounding down fractional numbers', () => {
            assert.strictEqual(calcNums('SUBTRACT', 3.3, 4.3), -1);
        });
    });
    describe('type = "DIVIDE"', () => {
        it('positive numbers', () => {
          assert.strictEqual(calcNums('DIVIDE', 8.0, 2.0), 4.0);
        });
    
        it('numbers with different signs', () => {
          assert.strictEqual(calcNums('DIVIDE', -7.0, 2.0), -3.5);
        });
    
        it('numbers with different signs (alternate)', () => {
          assert.strictEqual(calcNums('DIVIDE', 7.0, -2.0), -3.5);
        });
    
        it('negative numbers', () => {
          assert.strictEqual(calcNums('DIVIDE', -7.0, -2.0), 3.5);
        });
    
        it('equal positive numbers', () => {
          assert.strictEqual(calcNums('DIVIDE', 2.0, 2.0), 1);
        });
    
        it('equal negative numbers', () => {
          assert.strictEqual(calcNums('DIVIDE', -2.0, -2.0), 1);
        });
    
        it('equal rounded up numbers', () => {
          assert.strictEqual(calcNums('DIVIDE', 2.6, 3.0), 1);
        });
    
        it('equal rounded down numbers', () => {
          assert.strictEqual(calcNums('DIVIDE', 2.4, 2.0), 1);
        });
    
        it('0 and positive number', () => {
          assert.strictEqual(calcNums('DIVIDE', 0.0, 5.0), 0);
        });
    
        it('0 and negative number', () => {
          assert.strictEqual(calcNums('DIVIDE', 0.0, -5.0), -0);
        });
    
        it('positive number and 0', () => {
          assert.strictEqual(calcNums('DIVIDE', 5.0, 0), 'Error');
        });
    
        it('positive number and number rounded down to 0', () => {
          assert.strictEqual(calcNums('DIVIDE', 5.0, 0.2), 'Error');
        });
    
        it('positive number and number rounded up to 0', () => {
          assert.strictEqual(calcNums('DIVIDE', 5.0, -0.2), 'Error');
        });

        it('0 and 0', () => {
            assert.strictEqual(calcNums('DIVIDE', 0.0, 0.0), 'Error');
        });
      });
});