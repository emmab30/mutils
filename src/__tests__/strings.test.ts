import { muString } from '../';

test('Truncate string', () => {
    expect(muString.truncate('Hello world', 5, '...')).toBe('Hello...');
    expect(muString.truncateMiddle('Hello World', 5, '...')).toBe('He...rld');
    expect(() => {
        muString.truncate('', 5, '...');
    }).toThrow('Provide a valid string');
});
