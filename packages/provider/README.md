
# Provider

The Stability Provider Package offers developers a convenient way to integrate with the Stability Testnet and the Global Trust Network (GTN) using the `ethers.js` and `viem` library. This provider simplifies the process of creating `ethers.js` providers and `viem` configurations by automatically configuring them with the correct network settings.

For more information on Stability, an open-source blockchain technology without cryptocurrency dependencies, please visit the [Stability Protocol](https://stabilityprotocol.com/).

## Prerequisites

- Ethers.js and/or Viem
- Node.js
- An API Key from the [Stability Protocol](https://portal.stabilityprotocol.com/), available for free.

## Installation

To install the package, run the following command in your project directory:

```bash
npm i @stabilityprotocol/provider
```

## Usage

### Ethers.js

Here is a quick example using TypeScript and ts-node to get you started. In this example, we are connecting to the Global Trust Network (GTN).

```ts
import { StabilityGtnRpcProviderEthers } from "@stabilityprotocol/provider";

const gtnProvider = new StabilityGtnRpcProviderEthers("your_api_key"); // Sign up to get an API key at https://portal.stabilityprotocol.com

async function printCurrentBlockNumber(provider: StabilityGtnRpcProviderEthers) {
  const blockNumber = await provider.getBlockNumber();
  console.log(`Current Block Number: ${blockNumber}`);
}

printCurrentBlockNumber(gtnProvider);
```

### Viem

Below is a quick example using TypeScript and ts-node to get you started. In this example, we are connecting to the Global Trust Network.

```ts
import { createStabilityGtnClientViem } from "@stabilityprotocol/provider";

const YOUR_API_KEY = "134...."; // Sign up to get an API key at https://portal.stabilityprotocol.com

const client = createStabilityGtnClientViem(YOUR_API_KEY);

async function printCurrentBlockNumber() {
  const blockNumber = await client.getBlockNumber();
  console.log(`Current Block Number: ${blockNumber}`);
}

printCurrentBlockNumber();

## License

This library is licensed under the MIT License. See the [LICENSE](LICENSE) file for more information.
