
# Provider

The Stability Provider offers developers a convenient way to integrate with the Stability Testnet and the Global Trust Network (GTN) using the ethers.js library. This provider simplifies the process of creating ethers.js providers by automatically configuring them with the correct network settings.

For more information on Stability, an open-source blockchain technology without cryptocurrency dependencies, please visit the [Stability Protocol](https://stabilityprotocol.com/).

## Prerequisites

- Ethers.js
- Node.js
- An API Key from the [Stability Protocol](https://portal.stabilityprotocol.com/), available for free.

## Installation

To install the package, run the following command in your project directory:

```bash
npm i @stabilityprotocol/provider
```

## Usage

Here is a quick example using TypeScript and ts-node to get you started. In this example, we are connecting to the Global Trust Network (GTN).

```ts
import { StabilityGtnRpcProvider } from "@stabilityprotocol/provider";

const gtnProvider = new StabilityGtnRpcProvider("your_api_key"); // Sign up to get an API key at https://portal.stabilityprotocol.com

async function printCurrentBlockNumber(provider: StabilityGtnRpcProvider) {
  const blockNumber = await provider.getBlockNumber();
  console.log(`Current Block Number: ${blockNumber}`);
}

printCurrentBlockNumber(gtnProvider);
```

## License

This library is licensed under the MIT License. See the [LICENSE](LICENSE) file for more information.
