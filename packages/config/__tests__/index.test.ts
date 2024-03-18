import { networks, Blockchains } from "../src/index";

describe("Blockchain Enums and Objects", () => {
  it("should have the correct values for Blockchains enum", () => {
    expect(Blockchains.STABILITY_TESTNET).toEqual("stabilitytestnet");
    expect(Blockchains.STABILITY_GTN).toEqual("stabilitygtn");
  });

  it("should have correct network configurations for STABILITY_TESTNET", () => {
    const testnetConfig = networks[Blockchains.STABILITY_TESTNET];
    expect(testnetConfig.id).toEqual(20180427);
    expect(testnetConfig.name).toEqual("Stability Testnet");
    expect(testnetConfig.network).toEqual("stability-testnet");
    expect(testnetConfig.nativeCurrency.decimals).toEqual(18);
    expect(testnetConfig.nativeCurrency.name).toEqual(
      "Decentralized Native Token"
    );
    expect(testnetConfig.nativeCurrency.symbol).toEqual("DNT");
    expect(testnetConfig.rpcUrls.default.http[0]).toEqual(
      "https://free.testnet.stabilityprotocol.com"
    );
    expect(testnetConfig.blockExplorers.default.url).toEqual(
      "https://stability-testnet.blockscout.com/"
    );
    expect(testnetConfig.contracts.multicall3.address).toEqual(
      "0x3ed62137c5DB927cb137c26455969116BF0c23Cb"
    );
    expect(testnetConfig.contracts.multicall3.blockCreated).toEqual(2318);
  });

  it("should have correct network configurations for STABILITY_GTN", () => {
    const gtnConfig = networks[Blockchains.STABILITY_GTN];
    expect(gtnConfig.id).toEqual(101010);
    expect(gtnConfig.name).toEqual("Global Trust Network");
    expect(gtnConfig.network).toEqual("stability-gtn");
    expect(gtnConfig.nativeCurrency.decimals).toEqual(18);
    expect(gtnConfig.nativeCurrency.name).toEqual("Decentralized Native Token");
    expect(gtnConfig.nativeCurrency.symbol).toEqual("DNT");
    expect(gtnConfig.rpcUrls.default.http[0]).toEqual(
      "https://gtn.stabilityprotocol.com"
    );
    expect(gtnConfig.blockExplorers.default.url).toEqual(
      "https://stability-testnet.blockscout.com/"
    );
    expect(gtnConfig.contracts.multicall3.address).toEqual(
      "0xBA2923DAe45aD6b8B77bff4733c75b0C13F0ce2d"
    );
    expect(gtnConfig.contracts.multicall3.blockCreated).toEqual(453);
    expect(gtnConfig.logoUri).toEqual("/img/chain-icons/stability-logo.png");
  });
});
