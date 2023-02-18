# Installation

``npm install eamutils --save``

# Description
This package will be used for some util functions I reuse in many projects. 

# Strings

    - truncate(str: string, maxLength: number, suffix: string)
    - truncateMiddle(str: string, maxLength: number, suffix: string)

# Numbers
    - formatNumberToK(num: number, precision: number = 1, replaces: string[] = ['K', 'M', 'B', 'T'])
    - formatNumberCommas(num: any)
    - padLeadingZeros(num: any, finalLength: number)

# Web3

    - getAddresses(text: string) -> Returns a list of addresses detected in a given string
    - address(addr: string) -> Returns checksumed address

## Providers


There is a list of some common routes and providers.

    1. ETH Mainnet
    5. Goerli
    56. Binance Smart Chain
    97. Binance Smart Chain Testnet

You can add your own provider by using the following method: 

``Provider.createProvider(provider: IProvider)``

The IProvider definition is the following (only chainId and rpc are required)

```
export interface IProvider {
    chainId: number,
    rpcs: string[],

    // Optional data
    name?: string,
    explorer?: string,
    router?: string,
    factory?: string,
    factory_abi?: string,
    router_abi?: string,
    multicall?: string
};
```

So, to add **Arbitrum** for example, we should do something like this:

```
const provider = Provider.createProvider({
    chainId: 42161,
    rpcs: [
        'https://arbitrum.blockpi.network/v1/rpc/public'
    ]
})
```

## Routers and factory contracts

So, to get a router or factory contract from a custom provider, we should specific factory and router parameters (with the addresses of each one).

- To get a router, you can do something like this:

```
const provider = Provider.getProviderByChainId(1);
const router = Contract.getRouterFromProvider(provider);
const factory = await router.factory();
console.log(`Factory address: ${factory}`);
```

- To get a factory, you can do this:

```
const provider = Provider.getProviderByChainId(1);
const factory = Contract.getFactoryFromProvider(provider);
```

- To get a token contract instance, you can do this:

```
const provider = web3Utils.Provider.getProviderByChainId(1);
const token = web3Utils.Contract.getTokenContractFromProvider('0x811beEd0119b4AfCE20D2583EB608C6F7AF1954f', provider);
```

- To get a custom contract instance, you can do this:

```
const provider = web3Utils.Provider.getProviderByChainId(1);
const contract = web3Utils.Contract.getContractFromAddress(SC_CUSTOM_ADDRESS, SC_CUSTOM_ABI, provider);
```