export declare enum Blockchains {
    STABILITY_TESTNET = "stabilitytestnet",
    STABILITY_GTN = "stabilitygtn"
}
export declare const networks: {
    stabilitytestnet: {
        id: number;
        name: string;
        network: Blockchains;
        nativeCurrency: {
            decimals: number;
            name: string;
            symbol: string;
        };
        rpcUrl: string;
        blockExplorer: string;
        contracts: {
            multicall3: {
                address: string;
            };
        };
    };
    stabilitygtn: {
        id: number;
        name: string;
        network: Blockchains;
        nativeCurrency: {
            decimals: number;
            name: string;
            symbol: string;
        };
        rpcUrl: string;
        blockExplorer: string;
        contracts: {
            multicall3: {
                address: string;
            };
        };
    };
};
