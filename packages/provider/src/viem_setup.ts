import { defineChain, createPublicClient, http } from "viem"; 
import { networks, Blockchains } from "@stabilityprotocol/config";

export const networksConfig = {
  [Blockchains.STABILITY_TESTNET]: defineChain(networks[Blockchains.STABILITY_TESTNET]),
  [Blockchains.STABILITY_GTN]: defineChain(networks[Blockchains.STABILITY_GTN]),
};

export const createStabilityTestnetClientViem = () => {
    return createPublicClient({
      chain: networks.stabilitytestnet,
      transport: http(
        networks[Blockchains.STABILITY_TESTNET].rpcUrls.default.http[0]
      ),
    });
  };
  
  export const createStabilityGtnClientViem = (apiKey: string) => {
    return createPublicClient({
      chain: networks.stabilitygtn,
      transport: http(
        `${networks[Blockchains.STABILITY_GTN].rpcUrls.default.http[0]}/${apiKey}`
      ),
    });
  };