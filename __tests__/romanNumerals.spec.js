const RomanNumerals = require('../src/romanNumerals');
let app;
describe('romanNumerals', function () {

    beforeEach(function () {
        app = RomanNumerals();
    });

    it('converts numbers to roman numerals', function () {
        expect(app.fromNumber(1)).toBe('I');
        expect(app.fromNumber(2)).toBe('II');
        expect(app.fromNumber(3)).toBe('III');
        expect(app.fromNumber(4)).toBe('IV');
        expect(app.fromNumber(2648)).toBe('MMDCXLVIII');
    });

});