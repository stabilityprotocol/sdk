import { ethers } from "ethers";
import { Blockchains, networks } from "@stabilityprotocol/config";
import {
  createStabilityTestnetClientViem,
  createStabilityGtnClientViem,
} from "../src/index";
import { PublicClient } from "viem";

describe("Blockchain RPC Connection and Chain ID Tests", () => {
  Object.values(Blockchains).forEach((blockchain) => {
    describe(`${blockchain} Network`, () => {
      let provider: ethers.JsonRpcProvider;
      let viemProvider: PublicClient;

      beforeAll(() => {
        const rpcUrl = networks[blockchain].rpcUrls.default.http[0];
        provider = new ethers.JsonRpcProvider(rpcUrl);
        viemProvider = rpcUrl.includes("gtn")
          ? createStabilityGtnClientViem("apiKey")
          : createStabilityTestnetClientViem();
      });

      test("should connect to RPC network", async () => {
        const network = await provider.getNetwork();
        const viemNetwork = viemProvider.name;
        expect(network).toBeDefined();
        expect(viemNetwork).toBeDefined();
      });

      test("should retrieve the correct chain ID", async () => {
        const network = await provider.getNetwork();
        const viemNetwork = await viemProvider.getChainId();
        expect(Number(network.chainId)).toBe(networks[blockchain].id);
        expect(Number(viemNetwork)).toBe(networks[blockchain].id);
      });

      test("should be able to send a simple query to the network", async () => {
        const latestBlock = await provider.getBlockNumber();
        expect(latestBlock).toBeGreaterThan(0);
      });

      test("should have a valid block explorer URL", async () => {
        const blockExplorerUrl =
          networks[blockchain].blockExplorers.default.url;
        expect(blockExplorerUrl).toMatch(/^https?:\/\/[^\s$.?#].[^\s]*$/);
      });

      test("should have a valid logo URI", async () => {
        const logoUri = networks[blockchain].logoUri;
        expect(logoUri).toMatch(/^https?:\/\/[^\s$.?#].[^\s]*$/);
      });

      test("should have a valid multicall contract address", async () => {
        const multicallAddress =
          networks[blockchain].contracts.multicall3.address;
        expect(multicallAddress).toMatch(/^0x[a-fA-F0-9]{40}$/);
      });
    });
  });
});
