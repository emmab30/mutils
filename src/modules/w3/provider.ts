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
    const providers = require('./files/providers.json');
    return providers.map((i: any) => {
        return createProvider({
            ...i,
            factory_abi: require(i.factory_abi),
            router_abi: require(i.router_abi)
        });
    });
};

let Providers: IProvider[] = getDefaultProviders();

/*
    Configure providers on your application
    @returns providers
*/
export const configureProviders = (providers: IProvider[]) => {
    Providers = providers;
    return Providers;
};

/*
 *   Get provider by chain id
 *   @returns provider or undefined if not found
 */
export const getProviderByChainId = (chainId: number): IProvider | undefined => {
    return Providers.find((provider: IProvider) => provider.chainId === chainId);
};
