import { ethers } from "ethers";
import { networks, Blockchains } from "@stabilityprotocol/config";

export class StabilityGtnRpcProvider extends ethers.providers.JsonRpcProvider {
  constructor(apiKey: string) {
    const url = `${
      networks[Blockchains.STABILITY_GTN].rpcUrls.default.http[0]
    }/${apiKey}`;
    super(url, networks[Blockchains.STABILITY_GTN].id);
  }
}

export class StabilityTestnetRpcProvider extends ethers.providers
  .JsonRpcProvider {
  constructor() {
    super(
      networks[Blockchains.STABILITY_TESTNET].rpcUrls.default.http[0],
      networks[Blockchains.STABILITY_TESTNET].id
    );
  }
}
