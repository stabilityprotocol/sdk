# Config

A TypeScript library designed to provide straightforward access to the Stability Testnet and Global Trust Network configurations. This package simplifies the process of integrating blockchain network configurations into your projects, offering details like network IDs, names, native currencies, RPC URLs, and smart contract addresses.

## EXAMPLE

```ts
import { Blockchains, networks } from "@stabilityprotocol/config";

console.log(
  "Global Trust Network Chain Id:",
  networks[Blockchains.STABILITY_GTN].id
);
```

## License

This library is licensed under the MIT License. See the [LICENSE](LICENSE) file for more information.
