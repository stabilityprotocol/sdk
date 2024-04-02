# Config

A TypeScript library designed to provide straightforward access to the Stability Testnet and Global Trust Network configurations. This package simplifies the process of integrating blockchain network configurations into your projects, offering details like network IDs, names, native currencies, RPC URLs, and smart contract addresses. Additionally, the configuration is structured to be directly usable as a network config in viem, enhancing its compatibility and ease of use.

## EXAMPLE

```ts
import { Blockchains, networks } from "@stabilityprotocol/config";
import { createPublicClient, http } from "viem";

const YOUR_API_KEY = "134...."; // Sign up to get an API key at https://portal.stabilityprotocol.com

const client = createPublicClient({
  chain: networks.stabilitygtn,
  transport: http(
    `${
      networks[Blockchains.STABILITY_GTN].rpcUrls.default.http[0]
    }/${YOUR_API_KEY}`
  ),
});

const blockNumber = await client.getBlockNumber();
```

Additionally, we've created a simplified version allowing you to use Viem without the need to configure the transport, as easy as:

```ts
import { createStabilityGtnClient } from "@stabilityprotocol/config";

const YOUR_API_KEY = "134...."; // Sign up to get an API key at https://portal.stabilityprotocol.com

const client = createStabilityGtnClient(YOUR_API_KEY);

const blockNumber = await client.getBlockNumber();
```

## License

This library is licensed under the MIT License. See the [LICENSE](LICENSE) file for more information.
