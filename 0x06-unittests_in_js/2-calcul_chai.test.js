const { expect } = require('chai');
const calcNums = require('./2-calcul_chai');


describe('calcNums', () => {
    describe('type = "SUM"', () => {
        it('floating point whole numbers', () => {
            expect(calcNums('SUM', 3.0, 4.0)).to.equal(7);
        });

        it('rounding down fractional 1st number', () => {
            expect(calcNums('SUM', 3.3, 4.0)).to.equal(7);
        });

        it('rounding up fractional 1st number', () => {
            expect(calcNums('SUM', 3.7, 4.0)).to.equal(8);
        });

        it('rounding down fractional 2nd numbers', () => {
            expect(calcNums('SUM', 3.0, 4.3)).to.equal(7);
        });

        it('rounding up fractional 2nd numbers', () => {
            expect(calcNums('SUM', 3.0, 4.7)).to.equal(8);
        });

        it('rounding down fractional numbers', () => {
            expect(calcNums('SUM', 3.3, 4.3)).to.equal(7);
        });

        it('rounding up fractional numbers', () => {
            expect(calcNums('SUM', 3.7, 4.6)).to.equal(9);
        });
    });
    describe('type = "SUBTRACT"', () => {
        it('floating point whole numbers', () => {
            expect(calcNums('SUBTRACT', 3.0, 4.0)).to.equal(-1);
        });

        it('rounding down fractional 1st number', () => {
            expect(calcNums('SUBTRACT', 3.3, 4.0)).to.equal(-1);
        });

        it('rounding up fractional 1st number', () => {
            expect(calcNums('SUBTRACT', 3.7, 4.0)).to.equal(0);
        });

        it('rounding down fractional 2nd numbers', () => {
            expect(calcNums('SUBTRACT', 3.0, 4.3)).to.equal(-1);
        });

        it('rounding up fractional 2nd numbers', () => {
            expect(calcNums('SUBTRACT', 3.0, 4.7)).to.equal(-2);
        });

        it('rounding down fractional numbers', () => {
            expect(calcNums('SUBTRACT', 3.3, 4.3)).to.equal(-1);
        });
    });
    describe('type = "DIVIDE"', () => {
        it('positive numbers', () => {
          expect(calcNums('DIVIDE', 8.0, 2.0)).to.equal(4.0);
        });
    
        it('numbers with different signs', () => {
          expect(calcNums('DIVIDE', -7.0, 2.0)).to.equal(-3.5);
        });
    
        it('numbers with different signs (alternate)', () => {
          expect(calcNums('DIVIDE', 7.0, -2.0)).to.equal(-3.5);
        });
    
        it('negative numbers', () => {
          expect(calcNums('DIVIDE', -7.0, -2.0)).to.equal(3.5);
        });
    
        it('equal positive numbers', () => {
          expect(calcNums('DIVIDE', 2.0, 2.0)).to.equal(1);
        });
    
        it('equal negative numbers', () => {
          expect(calcNums('DIVIDE', -2.0, -2.0)).to.equal(1);
        });
    
        it('equal rounded up numbers', () => {
          expect(calcNums('DIVIDE', 2.6, 3.0)).to.equal(1);
        });
    
        it('equal rounded down numbers', () => {
          expect(calcNums('DIVIDE', 2.4, 2.0)).to.equal(1);
        });
    
        it('0 and positive number', () => {
          expect(calcNums('DIVIDE', 0.0, 5.0)).to.equal(0);
        });
    
        it('0 and negative number', () => {
          expect(calcNums('DIVIDE', 0.0, -5.0)).to.equal(-0);
        });
    
        it('positive number and 0', () => {
          expect(calcNums('DIVIDE', 5.0, 0)).to.equal('Error');
        });
    
        it('positive number and number rounded down to 0', () => {
          expect(calcNums('DIVIDE', 5.0, 0.2)).to.equal('Error');
        });
    
        it('positive number and number rounded up to 0', () => {
          expect(calcNums('DIVIDE', 5.0, -0.2)).to.equal('Error');
        });

        it('0 and 0', () => {
          expect(calcNums('DIVIDE', 0.0, 0.0)).to.equal('Error');
        });
    });
});