import assert from "assert"
import { Calculator } from "../Calculator";


describe('Calculator', () => {
    const calculator = new Calculator();
    const positiveX: number = 20;
    const positiveY: number = 5;
    const negativeX: number = -5;
    const negativeY: number = -33;
    const nullNumber: number = 0;
    describe('Sum', () => {
        it('should be sum of two positive parameters', function () {
            assert.equal(calculator.add(positiveX, positiveY), 25);
        });
        it('should be sum of two negative parameters', function () {
            assert.equal(calculator.add(negativeX, negativeY), -38);
        });
        it('should be sum of positive parameter with null', function () {
            assert.equal(calculator.add(positiveX, nullNumber), 20);
        });
    });
    describe('Product', () => {
        it('should be multiply of two positive parameters', function () {
            assert.equal(calculator.multiply(positiveX, positiveY), 100);
        });
        it('should be multiply of two negative parameters', function () {
            assert.equal(calculator.multiply(negativeX, negativeY), 165);
        });
        it('should be multiply of positive parameter with null', function () {
            assert.equal(calculator.multiply(positiveX, nullNumber), 0);
        });
        it('should be multiply of negative parameter with positive', function () {
            assert.equal(calculator.multiply(positiveX, negativeY), -660);
        });
    });
    describe('Difference', () => {
        it('should be difference of two positive parameters', function () {
            assert.equal(calculator.subtract(positiveX, positiveY), 15);
        });
        it('should be difference of two negative parameters', function () {
            assert.equal(calculator.subtract(negativeY, negativeX), -28);
        });
        it('should be difference of positive parameter with null', function () {
            assert.equal(calculator.subtract(positiveX, nullNumber), 20);
        });
    });
    describe('Division', () => {
        it('should be division of two positive parameters', function () {
            assert.equal(calculator.divide(positiveX, positiveY), 4);
        });
        it('should be division of two negative parameters', function () {
            assert.equal(calculator.divide(negativeY, negativeX), 6.6);
        });
        it('should be division of positive parameter with null', function () {
            assert.equal(calculator.divide(positiveX, nullNumber), Infinity);
        });
    });
})
