import { number } from '../index';

test('Format K number', () => {
    expect(number.formatNumberToK(205400)).toBe('205.4K');
    expect(number.formatNumberToK(1000000)).toBe('1M');
    expect(number.formatNumberToK(2208203, 2)).toBe('2.21M'); // Rounded up
    expect(number.formatNumberToK(10, 2)).toBe('10');
    expect(number.formatNumberToK(105000, 1, ['k', 'm', 'b', 't'])).toBe('105k');
    expect(number.formatNumberToK(10273402, 3, ['k', 'm', 'b', 't'])).toBe('10.273m');
});

test('Format number with commas', () => {
    expect(number.formatNumberCommas(1000000)).toBe('1,000,000');
    expect(number.formatNumberCommas(2003840)).toBe('2,003,840');
    expect(number.formatNumberCommas(100002038023802)).toBe('100,002,038,023,802');
    expect(number.formatNumberCommas(10283)).toBe('10,283');
});

test('Pad number adding leading zeros', () => {
    expect(number.padLeadingZeros(3, 2)).toBe('03');
    expect(number.padLeadingZeros(10, 10)).toBe('0000000010');
    expect(number.padLeadingZeros(2, 4)).toBe('0002');
});
