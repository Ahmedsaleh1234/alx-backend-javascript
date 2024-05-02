const calculateNumber = require('./1-calcul');
const assert = require('assert');

describe('calculateNumber', () => {
    describe('type == "SUM"', () =>{
        it('testing the sum of two float', () => {
            assert.strictEqual(calculateNumber('SUM', 1.2, 2.3), 3);
        });
        it('testing two integer', () => {
            assert.strictEqual(calculateNumber('SUM', 1, 2), 3);
        });
        it('testing frist round', () => {
            assert.strictEqual(calculateNumber('SUM', 2.4, 2.5), 5);
        });
        it('testing secound round', () =>{
            assert.strictEqual(calculateNumber('SUM', 3.6, 3.6), 8);
        });
        it('testing zero', () => {
            assert.strictEqual(calculateNumber('SUM', 0, 0), 0);
        });
        it('testing negative', () => {
            assert.strictEqual(calculateNumber('SUM', -2, -4), -6);
        });
        it('testing postive and negative', () => {
            assert.strictEqual(calculateNumber('SUM', -3, 1), -2);
        });
    });
    describe('type == "SUBTRACT"', () => {
        it('testing SUBTRACT two numbers', () => {
            assert.strictEqual(calculateNumber('SUBTRACT', 3, 2), 1);
        });
        it('testing SUBTRACT two float', () => {
            assert.strictEqual(calculateNumber('SUBTRACT', 4.3, 2.4), 2);
        });
        it('testing frist round', () => {
            assert.strictEqual(calculateNumber('SUBTRACT', 5.4, 5.6), -1);
        });
        it('testing secound round', () => {
            assert.strictEqual(calculateNumber('SUBTRACT', 5.7, 5.8), 0);
        });
        it('testing zero', () => {
            assert.strictEqual(calculateNumber('SUBTRACT', 0, 0), 0);
        });
        it('testing negative', () => {
            assert.strictEqual(calculateNumber('SUBTRACT', -3, -4), 1);
        });
        it('testing negative snd postive', () => {
            assert.strictEqual(calculateNumber('SUBTRACT', -3, 6), -9);
        });
    });
    describe('type == "DIVIDE"', () => {
        it('testing DIVIDE two numbers', () => {
            assert.strictEqual(calculateNumber('DIVIDE', 8.0, 2.0), 4.0);
        });
        it('testing DIVIDE two float', () => {
            assert.strictEqual(calculateNumber('DIVIDE', 4.3, 2), 2);
        });
        it('testing frist round', () => {
            assert.strictEqual(calculateNumber('DIVIDE', 5, 5), 1);
        });
        it('testing secound round', () => {
            assert.strictEqual(calculateNumber('DIVIDE', 5.7, 5.8), 1);
        });
        it('testing zero', () => {
            assert.strictEqual(calculateNumber('DIVIDE', 0, 0), 'Error');
        });
        it('testing negative', () => {
            assert.strictEqual(calculateNumber('DIVIDE', -3, -4), 0.75);
        });
        it('testing negative snd postive', () => {
            assert.strictEqual(calculateNumber('DIVIDE', -3, 6), -.5);
        });
    });
});