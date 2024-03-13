import { ethers } from "ethers";
import { Blockchains, networks } from "config";

export class StabilityGtnRpcProvider extends ethers.providers.JsonRpcProvider {
  constructor(apiKey: string) {
    const url = `${networks[Blockchains.STABILITY_GTN].rpcUrl}/${apiKey}`;
    super(url, networks[Blockchains.STABILITY_GTN].id);
  }
}

export class StabilityTestnetRpcProvider extends ethers.providers
  .JsonRpcProvider {
  constructor() {
    super(
      networks[Blockchains.STABILITY_TESTNET].rpcUrl,
      networks[Blockchains.STABILITY_TESTNET].id
    );
  }
}
