import * as ABIS from './abis';
const { address } = require('./index');
const { getRouterFromProvider } = require('./contract');
const { IProvider } = require('./provider');
const { ethers } = require('ethers');

/*
 *   Get token contract given a provider and address
 */
export const getContract = (provider: typeof IProvider, addr: string) => {
    const rpc = new ethers.providers.JsonRpcProvider(provider.rpcs[0]);
    const contract = new ethers.Contract(addr, ABIS.getCommonTokenABI(), rpc);
    return contract;
};

/*
 *   Get price of a token by using a path
 */
export const getPriceUsingPath = async (prov: typeof IProvider, path: string[], amount: number | string = 1) => {
    const router = getRouterFromProvider(prov);
    const baseToken = getContract(prov, path[0]);
    const baseDecimals = await baseToken.decimals();
    const units = ethers.utils.parseUnits(amount.toString(), baseDecimals);

    const quoteToken = getContract(prov, path[path.length - 1]);
    const quoteDecimals = await quoteToken.decimals();

    try {
        // Get amounts out using base pair: weth.address
        let amountOut = await router.getAmountsOut(units, path);
        amountOut = ethers.utils.formatUnits(amountOut[amountOut.length - 1], quoteDecimals);
        return amountOut;
    } catch (err: any) {
        throw new Error(`Error getting price of token using path: ${err.message}`);
    }
};

/*
 *   Get token price given both addresses
 *   @param fromAddress The address you want to convert from. Let's say BNB
 *   @param toAddress The address you want to convert to. Let's say some token from Binance Smart Chain or USDT
 *   @returns The price of the token (already formated to units)
 */
export const getPrice = async (
    prov: typeof IProvider,
    fromAddress: string,
    toAddress: string,
    amount: number | string = 1,
) => {
    let path = [address(fromAddress), address(toAddress)];
    if (path.indexOf(address(prov.weth?.address)) === -1) {
        path = [address(fromAddress), prov.weth?.address, address(toAddress)];
    }

    return getPriceUsingPath(prov, path, amount);
};
