import { ethers } from 'ethers';
import { muWeb3 } from '../index';

test('Get addresses from text', () => {
    const txt1 = `This is a simple text with 0x2170ed0880ac9a755fd29b2688956bd959f933f8 just 1 address in the middle`;
    const txt2 = `[0x2170ed0880ac9a755fd29b2688956bd959f933f8] This is a text with multiples addresses in the text: 0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c and text in middle`;

    expect(muWeb3.getAddresses('')).toBeNull();
    expect(muWeb3.getAddresses(txt1)).toHaveLength(1);
    expect(muWeb3.getAddresses(txt1)).toContain('0x2170ed0880ac9a755fd29b2688956bd959f933f8');
    expect(muWeb3.getAddresses(txt2)).toHaveLength(2);
});

test('Format address', () => {
    const addr = `0x2170ED0880ac9a755fd29b2688956bd959f933f8`;
    expect(muWeb3.address(addr)).toBe('0x2170Ed0880ac9A755fd29B2688956BD959F933F8');
});

test('Getting provider from the list', () => {
    const provider = muWeb3.Provider.getProviderByChainId(1);
    expect(provider.name).toBe('Ethereum Mainnet');
    expect(provider.router).toBe('0x7a250d5630b4cf539739df2c5dacb4c659f2488d');
});

test('Querying router contract from provider', async () => {
    const provider = muWeb3.Provider.getProviderByChainId(1);
    const router = muWeb3.Contract.getRouterFromProvider(provider);
    const factory = await router.factory();
    expect(factory).toBe(provider.factory);
});

test('Querying factory contract from provider', async () => {
    const provider = muWeb3.Provider.getProviderByChainId(1);
    const factory = muWeb3.Contract.getFactoryFromProvider(provider);
    const pair = await factory.getPair(
        '0x95ad61b0a150d79219dcf64e1e6cc01f0b64c4ce',
        '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2',
    );
    expect(muWeb3.address(pair)).toBe(muWeb3.address('0x811beed0119b4afce20d2583eb608c6f7af1954f'));
});

test('Querying token contract', async () => {
    const provider = muWeb3.Provider.getProviderByChainId(1);
    const token = muWeb3.Contract.getTokenContractFromProvider(
        '0x811beEd0119b4AfCE20D2583EB608C6F7AF1954f',
        provider,
    );
    let balance = await token.balanceOf('0x4527106ae1A661A9D2Ffc22575baCdaaCb5e51e0');
    balance = ethers.utils.formatUnits(balance, 18);
    expect(parseFloat(balance)).toBeGreaterThan(0);
});

test('Getting unexisting provider then creating it and query it', async () => {
    let provider = muWeb3.Provider.getProviderByChainId(20439);
    expect(provider).toBeUndefined();

    // Configure default providers and also add this one
    muWeb3.Provider.configureProviders([
        ...muWeb3.Provider.getDefaultProviders(),
        muWeb3.Provider.createProvider({
            chainId: 25,
            rpcs: ['https://node.croswap.com/rpc']
        })
    ]);

    provider = muWeb3.Provider.getProviderByChainId(25);
    expect(provider).toBeTruthy();

    const token = muWeb3.Contract.getTokenContractFromProvider(
        '0x5c7f8a570d578ed84e63fdfa7b1ee72deae1ae23',
        provider
    );
    const name = await token.name();
    const symbol = await token.symbol();

    expect(name).toBe('Wrapped CRO');
    expect(symbol).toBe('WCRO');
});

test('Querying custom contract (no token, no router, no factory)', async () => {
    const provider = muWeb3.Provider.getProviderByChainId(1);
    const contract = muWeb3.Contract.getContractFromAddress(
        '0x5e227ad1969ea493b43f840cff78d08a6fc17796',
        [
            {
                constant: false,
                inputs: [
                    {
                        components: [
                            { internalType: 'address', name: 'target', type: 'address' },
                            { internalType: 'bytes', name: 'callData', type: 'bytes' },
                        ],
                        internalType: 'struct Multicall.Call[]',
                        name: 'calls',
                        type: 'tuple[]',
                    },
                ],
                name: 'aggregate',
                outputs: [
                    { internalType: 'uint256', name: 'blockNumber', type: 'uint256' },
                    { internalType: 'bytes[]', name: 'returnData', type: 'bytes[]' },
                ],
                payable: false,
                stateMutability: 'nonpayable',
                type: 'function',
            },
            {
                constant: true,
                inputs: [{ internalType: 'uint256', name: 'blockNumber', type: 'uint256' }],
                name: 'getBlockHash',
                outputs: [{ internalType: 'bytes32', name: 'blockHash', type: 'bytes32' }],
                payable: false,
                stateMutability: 'view',
                type: 'function',
            },
            {
                constant: true,
                inputs: [],
                name: 'getCurrentBlockCoinbase',
                outputs: [{ internalType: 'address', name: 'coinbase', type: 'address' }],
                payable: false,
                stateMutability: 'view',
                type: 'function',
            },
            {
                constant: true,
                inputs: [],
                name: 'getCurrentBlockDifficulty',
                outputs: [{ internalType: 'uint256', name: 'difficulty', type: 'uint256' }],
                payable: false,
                stateMutability: 'view',
                type: 'function',
            },
            {
                constant: true,
                inputs: [],
                name: 'getCurrentBlockGasLimit',
                outputs: [{ internalType: 'uint256', name: 'gaslimit', type: 'uint256' }],
                payable: false,
                stateMutability: 'view',
                type: 'function',
            },
            {
                constant: true,
                inputs: [],
                name: 'getCurrentBlockTimestamp',
                outputs: [{ internalType: 'uint256', name: 'timestamp', type: 'uint256' }],
                payable: false,
                stateMutability: 'view',
                type: 'function',
            },
            {
                constant: true,
                inputs: [{ internalType: 'address', name: 'addr', type: 'address' }],
                name: 'getEthBalance',
                outputs: [{ internalType: 'uint256', name: 'balance', type: 'uint256' }],
                payable: false,
                stateMutability: 'view',
                type: 'function',
            },
            {
                constant: true,
                inputs: [],
                name: 'getLastBlockHash',
                outputs: [{ internalType: 'bytes32', name: 'blockHash', type: 'bytes32' }],
                payable: false,
                stateMutability: 'view',
                type: 'function',
            },
        ],
        provider,
    );
    let currentBlockGasLimit = await contract.getCurrentBlockGasLimit();
    expect(parseFloat(currentBlockGasLimit)).toBeGreaterThan(0);
});
