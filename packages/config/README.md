# Config

A TypeScript library designed to provide straightforward access to the Stability Testnet and Global Trust Network configurations. This package simplifies the process of integrating blockchain network configurations into your projects, offering details like network IDs, names, native currencies, RPC URLs, and smart contract addresses. Additionally, the configuration is structured to be directly usable as a network config in viem, enhancing its compatibility and ease of use.

## EXAMPLE

```ts
import { publicProvider } from "wagmi/providers/public";
import { configureChains, createConfig } from "wagmi";
import { Blockchains, networks } from "@stabilityprotocol/config";

const { chains, publicClient } = configureChains(
  [
    networks[Blockchains.STABILITY_TESTNET],
    networks[Blockchains.STABILITY_GTN],
  ],
  [publicProvider()]
);
```

## License

This library is licensed under the MIT License. See the [LICENSE](LICENSE) file for more information.
