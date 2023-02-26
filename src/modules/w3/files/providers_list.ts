export const getProviders = () => [
    {
        name: 'Ethereum Mainnet',
        explorer: 'https://etherscan.io',
        chainId: 1,
        logo: 'https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2/logo.png',
        rpcs: ['https://rpc.ankr.com/eth', 'https://cloudflare-eth.com'],
        router: '0x7a250d5630b4cf539739df2c5dacb4c659f2488d',
        factory: '0x5C69bEe701ef814a2B6a3EDD4B1652CB9cc5aA6f',
        factory_abi: './files/abis/erc20.factory.json',
        router_abi: './files/abis/erc20.router.json',
        multicall: '0xcA11bde05977b3631167028862bE2a173976CA11',
        weth: {
            address: '0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2',
            name: 'Wrapped Ether',
            symbol: 'WETH',
            decimals: 18,
        },
        // Those pairs are useful in case you want to get a liquidity pool pair
        base_pairs: [
            '0xdAC17F958D2ee523a2206206994597C13D831ec7', // USDT
            '0x6B175474E89094C44Da98b954EedeAC495271d0F', // DAI
            '0x4Fabb145d64652a948d72533023f6E7A623C7C53', // BUSD
            '0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48', // USDC
        ],
    },
    {
        name: 'Goerli Testnet',
        explorer: 'https://goerli.etherscan.io',
        chainId: 5,
        logo: 'https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2/logo.png',
        rpcs: ['https://goerli.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161', 'https://rpc.ankr.com/eth_goerli'],
        router: '0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D',
        factory: '0x5C69bEe701ef814a2B6a3EDD4B1652CB9cc5aA6f',
        factory_abi: './files/abis/erc20.factory.json',
        router_abi: './files/abis/erc20.router.json',
        multicall: '0x77dca2c955b15e9de4dbbcf1246b4b85b651e50e',
        weth: {
            address: '0xb4fbf271143f4fbf7b91a5ded31805e42b2208d6',
            name: 'Wrapped Ether',
            symbol: 'WETH',
            decimals: 18,
        },
    },
    {
        name: 'Binance Smart Chain',
        explorer: 'https://bscscan.com',
        chainId: 56,
        logo: 'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/smartchain/assets/0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c/logo.png',
        rpcs: ['https://bsc-dataseed.binance.org/', 'https://bsc-dataseed1.defibit.io/'],
        router: '0x10ED43C718714eb63d5aA57B78B54704E256024E',
        factory: '0xcA143Ce32Fe78f1f7019d7d551a6402fC5350c73',
        factory_abi: './files/abis/erc20.factory.json',
        router_abi: './files/abis/erc20.router.json',
        multicall: '0x1Ee38d535d541c55C9dae27B12edf090C608E6Fb',
        weth: {
            address: '0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c',
            name: 'Wrapped BNB',
            symbol: 'WBNB',
            decimals: 18,
        },
        base_pairs: [
            '0x55d398326f99059ff775485246999027b3197955', // USDT
            '0x1af3f329e8be154074d8769d1ffa4ee058b1dbc3', // DAI
            '0xe9e7cea3dedca5984780bafc599bd69add087d56', // BUSD
            '0x8ac76a51cc950d9822d68b83fe1ad97b32cd580d', // USDC
        ],
    },
    {
        name: 'Binance Smart Chain Testnet',
        explorer: 'https://testnet.bscscan.com',
        chainId: 97,
        logo: 'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/smartchain/assets/0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c/logo.png',
        rpcs: ['https://data-seed-prebsc-1-s1.binance.org:8545/', 'https://data-seed-prebsc-2-s1.binance.org:8545/'],
        router: '0x9Ac64Cc6e4415144C455BD8E4837Fea55603e5c3',
        factory: '0x6725F303b657a9451d8BA641348b6761A6CC7a17',
        factory_abi: './files/abis/erc20.factory.json',
        router_abi: './files/abis/erc20.router.json',
        multicall: '0x6e5bb1a5ad6f68a8d7d6a5e47750ec15773d6042',
        weth: {
            address: '0xae13d989dac2f0debff460ac112a837c89baa7cd',
            name: 'Wrapped BNB',
            symbol: 'WBNB',
            decimals: 18,
        },
    },
    {
        name: 'Arbitrum One',
        explorer: 'https://arbiscan.io',
        chainId: 42161,
        logo: 'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/arbitrum/info/logo.png',
        rpcs: ['https://rpc.ankr.com/arbitrum'],
        router: '0x1b02da8cb0d097eb8d57a175b88c7d8b47997506',
        factory: '0xc35dadb65012ec5796536bd9864ed8773abc74c4',
        factory_abi: './files/abis/erc20.factory.json',
        router_abi: './files/abis/erc20.router.json',
        multicall: '0x80c7dd17b01855a6d2347444a0fcc36136a314de',
        weth: {
            address: '0x82aF49447D8a07e3bd95BD0d56f35241523fBab1',
            name: 'Wrapped Ether',
            symbol: 'WETH',
            decimals: 18,
        },
        base_pairs: [
            '0xfd086bc7cd5c481dcc9c85ebe478a1c0b69fcbb9', // USDT
            '0xda10009cbd5d07dd0cecc66161fc93d7c9000da1', // DAI
            '0xff970a61a04b1ca14834a43f5de4533ebddb5cc8', // USDC
        ],
    },
    {
        name: 'Arbitrum Goerli',
        explorer: 'https://goerli.arbiscan.io',
        chainId: 421613,
        logo: 'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/arbitrum/info/logo.png',
        rpcs: ['https://goerli-rollup.arbitrum.io/rpc'],
        router: '0x1b02da8cb0d097eb8d57a175b88c7d8b47997506',
        factory: '0xc35dadb65012ec5796536bd9864ed8773abc74c4',
        factory_abi: './files/abis/erc20.factory.json',
        router_abi: './files/abis/erc20.router.json',
        multicall: '0x108b25170319f38dbed14ca9716c54e5d1ff4623',
        weth: {
            address: '0xe39Ab88f8A4777030A534146A9Ca3B52bd5D43A3',
            name: 'Wrapped Ether',
            symbol: 'WETH',
            decimals: 18,
        },
    },
];
