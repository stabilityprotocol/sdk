import { defineChain, Address } from "viem";

export enum Blockchains {
  STABILITY_TESTNET = "stabilitytestnet",
  STABILITY_GTN = "stabilitygtn",
}

export const networks = {
  [Blockchains.STABILITY_TESTNET]: defineChain({
    id: 20180427,
    name: "Stability Testnet",
    network: "stability-testnet",
    key: "stabilityTestnet",
    nativeCurrency: {
      decimals: 18,
      name: "Decentralized Native Token",
      symbol: "DNT",
    },
    rpcUrls: {
      default: {
        http: ["https://free.testnet.stabilityprotocol.com"],
      },
      public: {
        http: ["https://free.testnet.stabilityprotocol.com"],
      },
    },
    blockExplorers: {
      default: {
        name: "Stability Testnet",
        url: "https://stability-testnet.blockscout.com/",
      },
    },
    contracts: {
      multicall3: {
        address: "0x3ed62137c5DB927cb137c26455969116BF0c23Cb" as Address,
        blockCreated: 2318,
      },
    },
  }),
  [Blockchains.STABILITY_GTN]: defineChain({
    id: 101010,
    name: "Global Trust Network",
    network: "stability-gtn",
    key: "stabilityGtn",
    nativeCurrency: {
      decimals: 18,
      name: "Decentralized Native Token",
      symbol: "DNT",
    },
    rpcUrls: {
      default: {
        http: ["https://gtn.stabilityprotocol.com"],
      },
      public: {
        http: ["https://gtn.stabilityprotocol.com"],
      },
    },
    blockExplorers: {
      default: {
        name: "Stability GTN",
        url: "https://stability-testnet.blockscout.com/",
      },
    },
    contracts: {
      multicall3: {
        address: "0xBA2923DAe45aD6b8B77bff4733c75b0C13F0ce2d",
        blockCreated: 453,
      },
    },
    logoUri: "/img/chain-icons/stability-logo.png",
  }),
};
