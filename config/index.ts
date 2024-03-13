export enum Blockchains {
  STABILITY_TESTNET = "stabilitytestnet",
  STABILITY_GTN = "stabilitygtn",
}

export const networks = {
  [Blockchains.STABILITY_TESTNET]: {
    id: 20180427,
    name: "Stability Testnet",
    network: Blockchains.STABILITY_TESTNET,
    nativeCurrency: {
      decimals: 18,
      name: "Decentralized Native Token",
      symbol: "DNT",
    },
    rpcUrl: "https://free.testnet.stabilityprotocol.com",
    blockExplorer: "https://stability-testnet.blockscout.com/",
    contracts: {
      multicall3: {
        address: "0x3ed62137c5DB927cb137c26455969116BF0c23Cb",
      },
    },
  },
  [Blockchains.STABILITY_GTN]: {
    id: 101010,
    name: "Global Trust Network",
    network: Blockchains.STABILITY_GTN,
    nativeCurrency: {
      decimals: 18,
      name: "Decentralized Native Token",
      symbol: "DNT",
    },
    rpcUrl: "https://gtn.stabilityprotocol.com",
    blockExplorer: "https://stability-testnet.blockscout.com/",
    contracts: {
      multicall3: {
        address: "0xBA2923DAe45aD6b8B77bff4733c75b0C13F0ce2d",
      },
    },
  },
};
