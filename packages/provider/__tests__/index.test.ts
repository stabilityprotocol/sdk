import { ethers } from "ethers";
import { networks } from "@stabilityprotocol/config";
import {
  StabilityGtnRpcProvider,
  StabilityTestnetRpcProvider,
} from "../src/index";

describe("StabilityGtnRpcProvider", () => {
  it("correctly configures the provider instance for the Global Trust Network (STABILITY_GTN) with the correct RPC URL", () => {
    const apiKey = "dummyApiKey";
    const provider = new StabilityGtnRpcProvider(apiKey);

    expect(provider.connection.url).toBe(
      `${networks.stabilitygtn.rpcUrls.default.http[0]}/${apiKey}`
    );
  });

  it("correctly configures the provider instance for the Stability Testnet (STABILITY_GTN) with the correct CHAIN ID", () => {
    const apiKey = "dummyApiKey";
    const provider = new StabilityGtnRpcProvider(apiKey);

    expect(provider.network.chainId).toBe(networks.stabilitygtn.id);
  });
});

describe("StabilityTestnetRpcProvider", () => {
  it("correctly configures the provider instance for the Stability Testnet (STABILITY_TESTNET) with the correct RPC URL", () => {
    const provider = new StabilityTestnetRpcProvider();

    expect(provider.connection.url).toBe(
      networks.stabilitytestnet.rpcUrls.default.http[0]
    );
  });

  it("correctly configures the provider instance for the Stability Testnet (STABILITY_TESTNET) with the correct CHAIN ID", () => {
    const provider = new StabilityTestnetRpcProvider();

    expect(provider.network.chainId).toBe(networks.stabilitytestnet.id);
  });
});
