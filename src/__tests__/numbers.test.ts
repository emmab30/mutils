import * as nUtils from '../index';

test('Format K number', () => {
    expect(nUtils.formatNumberToK(205400)).toBe('205.4K');
    expect(nUtils.formatNumberToK(1000000)).toBe('1M');
    expect(nUtils.formatNumberToK(2208203, 2)).toBe('2.21M'); // Rounded up
    expect(nUtils.formatNumberToK(10, 2)).toBe('10');
    expect(nUtils.formatNumberToK(105000, 1, ['k', 'm', 'b', 't'])).toBe('105k');
    expect(nUtils.formatNumberToK(10273402, 3, ['k', 'm', 'b', 't'])).toBe('10.273m');
});

test('Format number with commas', () => {
    expect(nUtils.formatNumberCommas(1000000)).toBe('1,000,000');
    expect(nUtils.formatNumberCommas(2003840)).toBe('2,003,840');
    expect(nUtils.formatNumberCommas(100002038023802)).toBe('100,002,038,023,802');
    expect(nUtils.formatNumberCommas(10283)).toBe('10,283');
});

test('Pad number adding leading zeros', () => {
    expect(nUtils.padLeadingZeros(3, 2)).toBe('03');
    expect(nUtils.padLeadingZeros(10, 10)).toBe('0000000010');
    expect(nUtils.padLeadingZeros(2, 4)).toBe('0002');
});
