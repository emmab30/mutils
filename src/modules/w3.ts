const web3 = require('web3');

export const getAddresses = (text: string): any[] | null => {
    if(!text) return null;

    const regex = /0x[0-9a-fA-F]{40}/g;
    return text.match(regex);
}

/*
*   Normalize an address to checksum format
*/
export const address = (address: string) => {
    return web3.utils.toChecksumAddress(address);
}