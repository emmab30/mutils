import * as web3Utils from '../modules/w3';

test('Get addresses from text', () => {
    const txt1 = `This is a simple text with 0x2170ed0880ac9a755fd29b2688956bd959f933f8 just 1 address in the middle`;
    const txt2 = `[0x2170ed0880ac9a755fd29b2688956bd959f933f8] This is a text with multiples addresses in the text: 0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c and text in middle`;

    expect(web3Utils.getAddresses('')).toBeNull();
    expect(web3Utils.getAddresses(txt1)).toHaveLength(1);
    expect(web3Utils.getAddresses(txt1)).toContain('0x2170ed0880ac9a755fd29b2688956bd959f933f8');
    expect(web3Utils.getAddresses(txt2)).toHaveLength(2);
});

test('Format address', () => {
    const addr = `0x2170ED0880ac9a755fd29b2688956bd959f933f8`;
    expect(web3Utils.address(addr)).toBe('0x2170Ed0880ac9A755fd29B2688956BD959F933F8');
});
