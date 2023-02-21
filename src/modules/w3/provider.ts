export interface IProvider {
    chainId: number;
    rpcs: string[];
    // Optional data
    name?: string;
    explorer?: string;
    router?: string;
    factory?: string;
    factory_abi?: string;
    router_abi?: string;
    multicall?: string;
}

/*
*   Create a new provider object
*/
export const createProvider = (provider: IProvider): IProvider => {
    return provider;
};

export const getDefaultProviders = (): IProvider[] => {
    return [
        createProvider({
            name: 'Ethereum Mainnet',
            explorer: 'https://etherscan.io',
            chainId: 1,
            rpcs: ['https://rpc.ankr.com/eth', 'https://cloudflare-eth.com'],
            router: '0x7a250d5630b4cf539739df2c5dacb4c659f2488d',
            factory: '0x5C69bEe701ef814a2B6a3EDD4B1652CB9cc5aA6f',
            factory_abi: require('./abis/erc20.factory.json'),
            router_abi: require('./abis/erc20.router.json'),
            multicall: '0xcA11bde05977b3631167028862bE2a173976CA11',
        }),
        createProvider({
            name: 'Goerli Testnet',
            explorer: 'https://goerli.etherscan.io',
            chainId: 5,
            rpcs: ['https://goerli.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161	', 'https://rpc.ankr.com/eth_goerli'],
            router: '0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D',
            factory: '0x5C69bEe701ef814a2B6a3EDD4B1652CB9cc5aA6f',
            factory_abi: require('./abis/erc20.factory.json'),
            router_abi: require('./abis/erc20.router.json'),
            multicall: '0x77dca2c955b15e9de4dbbcf1246b4b85b651e50e',
        }),
        createProvider({
            name: 'Binance Smart Chain',
            explorer: 'https://bscscan.com',
            chainId: 56,
            rpcs: ['https://bsc-dataseed.binance.org/', 'https://bsc-dataseed1.defibit.io/'],
            router: '0x10ED43C718714eb63d5aA57B78B54704E256024E',
            factory: '0xcA143Ce32Fe78f1f7019d7d551a6402fC5350c73',
            factory_abi: require('./abis/erc20.factory.json'),
            router_abi: require('./abis/erc20.router.json'),
            multicall: '0x1Ee38d535d541c55C9dae27B12edf090C608E6Fb',
        }),
        createProvider({
            name: 'Binance Smart Chain Testnet',
            explorer: 'https://testnet.bscscan.com',
            chainId: 97,
            rpcs: ['https://data-seed-prebsc-1-s1.binance.org:8545/', 'https://data-seed-prebsc-2-s1.binance.org:8545/'],
            router: '0x9Ac64Cc6e4415144C455BD8E4837Fea55603e5c3',
            factory: '0x6725F303b657a9451d8BA641348b6761A6CC7a17',
            factory_abi: require('./abis/erc20.factory.json'),
            router_abi: require('./abis/erc20.router.json'),
            multicall: '0x6e5bb1a5ad6f68a8d7d6a5e47750ec15773d6042',
        })
    ]
}

let Providers: IProvider[] = getDefaultProviders();

/*
    Configure providers on your application
    @returns providers
*/
export const configureProviders = (providers: IProvider[]) => {
    Providers = providers;
    return Providers;
}

/*
 *   Get provider by chain id
 *   @returns provider or undefined if not found
 */
export const getProviderByChainId = (chainId: number): IProvider | undefined => {
    return Providers.find((provider: IProvider) => provider.chainId === chainId);
};