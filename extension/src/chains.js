// Define an object representing the Ethereum chain with specific properties
const Ethereum = {
    hex: '0x1', // The hexadecimal representation of the chain identifier
    name: 'Ethereum', // The human-readable name of the chain
    rpcUrl: 'https://mainnet.infura.io/v3/', // The RPC (Remote Procedure Call) URL used to interact with the chain
    ticker: "ETH" // The ticker symbol representing the native currency of the chain
};

// Define an object representing the Mumbai Testnet chain with specific properties
const MumbaiTestnet = {
    hex: '0x13881', // The hexadecimal representation of the chain identifier
    name: 'Mumbai Testnet', // The human-readable name of the chain
    rpcUrl: 'https://polygon-mumbai.g.alchemy.com/v2/BNup1-Ogho6GsLllHnRHt2fzC-MEJfpN', // The RPC (Remote Procedure Call) URL used to interact with the chain (to be filled later)
    ticker: "MATIC" // The ticker symbol representing the native currency of the chain
};

// Export an object named CHAINS_CONFIG representing a mapping of chain identifiers to their respective chain configurations
export const CHAINS_CONFIG = {
    "0x1": Ethereum, // Map the Ethereum chain identifier to the Ethereum chain configuration object
    "0x13881": MumbaiTestnet, // Map the Mumbai Testnet chain identifier to the Mumbai Testnet chain configuration object
};
