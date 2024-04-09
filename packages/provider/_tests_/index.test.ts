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

      // Config Validation Tests

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

      // RPC Connection Tests

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
        const viemLatestBlock = await viemProvider.getBlockNumber();
        expect(viemLatestBlock).toBeGreaterThan(0);
      });

      test("should retrieve a block by number", async () => {
        const blockNumber = await provider.getBlockNumber();
        const block = await provider.getBlock(blockNumber - 1);
        expect(block).toBeDefined();

        const viemBlockNumber = await viemProvider.getBlockNumber();
        const viemBlock = await Number(
          viemProvider.getBlock({
            blockNumber: viemBlockNumber - BigInt(1),
            includeTransactions: true,
          })
        );
        expect(viemBlock).toBeDefined();
      });

      test("should retrieve transaction count by address", async () => {
        const address = "0xC26CeeFd4e58288e44CDC445D23D43D5202983f9";
        const txCount = await provider.getTransactionCount(address);
        expect(txCount).toBeGreaterThanOrEqual(0);

        const viemTxCount = await viemProvider.getTransactionCount({ address });
        expect(viemTxCount).toBeGreaterThanOrEqual(0);
      });
    });
  });
});
