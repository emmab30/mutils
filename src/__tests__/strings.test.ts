import * as sUtils from '../modules/strings';

test('Truncate string', () => {
    expect(sUtils.truncate('Hello world', 5, '...')).toBe('Hello...');
    expect(sUtils.truncateMiddle('Hello World', 5, '...')).toBe('He...rld');
    expect(() => {
        sUtils.truncate('', 5, '...')
    }).toThrow('Provide a valid string');
});