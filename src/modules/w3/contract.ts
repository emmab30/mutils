const { IProvider } = require('./provider');
const { ethers } = require('ethers');

export const getFactoryFromProvider = (provider: typeof IProvider) => {
    const rpc = new ethers.providers.JsonRpcProvider(provider.rpcs[0]);
    const contract = new ethers.Contract(provider.factory, provider.factory_abi, rpc);
    return contract;
};

export const getRouterFromProvider = (provider: typeof IProvider) => {
    const rpc = new ethers.providers.JsonRpcProvider(provider.rpcs[0]);
    const contract = new ethers.Contract(provider.router, provider.router_abi, rpc);
    return contract;
};

export const getTokenContractFromProvider = (address: string, provider: typeof IProvider) => {
    const rpc = new ethers.providers.JsonRpcProvider(provider.rpcs[0]);
    const contract = new ethers.Contract(address, require('./abis/erc20.token.json'), rpc);
    return contract;
};

export const getContractFromAddress = (address: string, abi: any, provider: typeof IProvider) => {
    const rpc = new ethers.providers.JsonRpcProvider(provider.rpcs[0]);
    return new ethers.Contract(address, abi, rpc);
};
