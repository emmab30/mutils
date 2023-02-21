import { muNumber } from '../index';

test('Format K number', () => {
    expect(muNumber.formatNumberToK(205400)).toBe('205.4K');
    expect(muNumber.formatNumberToK(1000000)).toBe('1M');
    expect(muNumber.formatNumberToK(2208203, 2)).toBe('2.21M'); // Rounded up
    expect(muNumber.formatNumberToK(10, 2)).toBe('10');
    expect(muNumber.formatNumberToK(105000, 1, ['k', 'm', 'b', 't'])).toBe('105k');
    expect(muNumber.formatNumberToK(10273402, 3, ['k', 'm', 'b', 't'])).toBe('10.273m');
});

test('Format number with commas', () => {
    expect(muNumber.formatNumberCommas(1000000)).toBe('1,000,000');
    expect(muNumber.formatNumberCommas(2003840)).toBe('2,003,840');
    expect(muNumber.formatNumberCommas(100002038023802)).toBe('100,002,038,023,802');
    expect(muNumber.formatNumberCommas(10283)).toBe('10,283');
});

test('Pad number adding leading zeros', () => {
    expect(muNumber.padLeadingZeros(3, 2)).toBe('03');
    expect(muNumber.padLeadingZeros(10, 10)).toBe('0000000010');
    expect(muNumber.padLeadingZeros(2, 4)).toBe('0002');
});
