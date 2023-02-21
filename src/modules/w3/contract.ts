import * as ABIS from './abis';

const { IProvider } = require('./provider');
const { ethers } = require('ethers');

export const getFactoryFromProvider = (provider: typeof IProvider) => {
    if (!provider.factory_abi) throw new Error(`The provider ${provider.chainId} does not have a factory abi`);

    const rpc = new ethers.providers.JsonRpcProvider(provider.rpcs[0]);
    const contract = new ethers.Contract(provider.factory, ABIS.getCommonFactoryABI(), rpc);
    return contract;
};

export const getRouterFromProvider = (provider: typeof IProvider) => {
    if (!provider.router_abi) throw new Error(`The provider ${provider.chainId} does not have a router abi`);

    const rpc = new ethers.providers.JsonRpcProvider(provider.rpcs[0]);
    const contract = new ethers.Contract(provider.router, ABIS.getCommonRouterABI(), rpc);
    return contract;
};

export const getTokenContractFromProvider = (address: string, provider: typeof IProvider) => {
    const rpc = new ethers.providers.JsonRpcProvider(provider.rpcs[0]);
    const contract = new ethers.Contract(address, ABIS.getCommonTokenABI(), rpc);
    return contract;
};

export const getContractFromAddress = (address: string, abi: any, provider: typeof IProvider) => {
    const rpc = new ethers.providers.JsonRpcProvider(provider.rpcs[0]);
    return new ethers.Contract(address, abi, rpc);
};
