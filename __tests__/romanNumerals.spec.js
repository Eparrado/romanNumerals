describe('romanNumerals', function () {
    it('converts numbers to roman numerals', function () {
        var RomanNumerals = require('../src/romanNumerals');

        expect(RomanNumerals.fromNumber(1)).toBe('I');
        expect(RomanNumerals.fromNumber(2)).toBe('II');
        expect(RomanNumerals.fromNumber(3)).toBe('III');

    });

});