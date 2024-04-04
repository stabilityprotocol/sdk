
# Config

A TypeScript library designed to provide straightforward access to the Stability Testnet and Global Trust Network (GTN) configurations. This package streamlines the process of integrating blockchain network configurations into your projects, offering essential details like network IDs, names, native currencies, RPC URLs, and smart contract addresses. Moreover, the configuration is structured for direct usability as a network config in Viem, enhancing its compatibility and ease of use.

## Prerequisites

- Viem
- Node.js
- An API Key from [Stability Protocol](https://portal.stabilityprotocol.com/), available for free.

## Installation

To install the package, run the following command in your project directory:

```bash
npm i @stabilityprotocol/provider
```

## Usage

Below is a quick example using TypeScript and ts-node to get you started. In this example, we are connecting to the Global Trust Network.

```ts
import { Blockchains, networks } from "@stabilityprotocol/config";
import { createPublicClient, http } from "viem";

const YOUR_API_KEY = "134...."; // Sign up to get an API key at https://portal.stabilityprotocol.com

const client = createPublicClient({
  chain: networks.stabilitygtn,
  transport: http(
    `${networks[Blockchains.STABILITY_GTN].rpcUrls.default.http[0]}/${YOUR_API_KEY}`
  ),
});

async function printCurrentBlockNumber() {
  const blockNumber = await client.getBlockNumber();
  console.log(`Current Block Number: ${blockNumber}`);
}

printCurrentBlockNumber();
```

We've also created a simplified version that allows you to use Viem without the need to configure the transport. In this example, we are connecting to the Global Trust Network.

```ts
import { createStabilityGtnClient } from "@stabilityprotocol/config";

const YOUR_API_KEY = "134...."; // Sign up to get an API key at https://portal.stabilityprotocol.com

const client = createStabilityGtnClient(YOUR_API_KEY);

async function printCurrentBlockNumber() {
  const blockNumber = await client.getBlockNumber();
  console.log(`Current Block Number: ${blockNumber}`);
}

printCurrentBlockNumber();
```

## License

This library is licensed under the MIT License. See the [LICENSE](LICENSE) file for more information.
