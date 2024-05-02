const calculateNumber = require('./1-calcul');
const { expect } = require('chai');

describe('calculateNumber', () => {
    describe('type == "SUM"', () =>{
        it('testing the sum of two float', () => {
            expect(calculateNumber('SUM', 1.2, 2.3)).to.equal(3);
        });
        it('testing two integer', () => {
            expect(calculateNumber('SUM', 1, 2)).to.equal(3);
        });
        it('testing frist round', () => {
            expect(calculateNumber('SUM', 2.4, 2.5)).to.equal(5);
        });
        it('testing secound round', () =>{
            expect(calculateNumber('SUM', 3.6, 3.6)).to.equal(8);
        });
        it('testing zero', () => {
            expect(calculateNumber('SUM', 0, 0)).to.equal(0);
        });
        it('testing negative', () => {
            expect(calculateNumber('SUM', -2, -4)).to.equal(-6);
        });
        it('testing postive and negative', () => {
            expect(calculateNumber('SUM', -3, 1)).to.equal(-2);
        });
    });
    describe('type == "SUBTRACT"', () => {
        it('testing SUBTRACT two numbers', () => {
            expect(calculateNumber('SUBTRACT', 3, 2)).to.equal(1);
        });
        it('testing SUBTRACT two float', () => {
            expect(calculateNumber('SUBTRACT', 4.3, 2.4)).to.equal(2);
        });
        it('testing frist round', () => {
            expect(calculateNumber('SUBTRACT', 5.4, 5.6)).to.equal(-1);
        });
        it('testing secound round', () => {
            expect(calculateNumber('SUBTRACT', 5.7, 5.8)).to.equal(0);
        });
        it('testing zero', () => {
            expect(calculateNumber('SUBTRACT', 0, 0)).to.equal(0);
        });
        it('testing negative', () => {
            expect(calculateNumber('SUBTRACT', -3, -4)).to.equal(1);
        });
        it('testing negative snd postive', () => {
            expect(calculateNumber('SUBTRACT', -3, 6)).to.equal(-9);
        });
    });
    describe('type == "DIVIDE"', () => {
        it('testing DIVIDE two numbers', () => {
            expect(calculateNumber('DIVIDE', 8.0, 2.0)).to.equal (4.0);
        });
        it('testing DIVIDE two float', () => {
            expect(calculateNumber('DIVIDE', 4.3, 2)).to.equal(2);
        });
        it('testing frist round', () => {
            expect(calculateNumber('DIVIDE', 5, 5)).to.equal(1);
        });
        it('testing secound round', () => {
            expect(calculateNumber('DIVIDE', 5.7, 5.8)).to.equal(1);
        });
        it('testing zero', () => {
            expect(calculateNumber('DIVIDE', 0, 0)).to.equal('Error');
        });
        it('testing negative', () => {
            expect(calculateNumber('DIVIDE', -3, -4)).to.equal(0.75);
        });
        it('testing negative snd postive', () => {
            expect(calculateNumber('DIVIDE', -3, 6)).to.equal(-.5);
        });
    });
});