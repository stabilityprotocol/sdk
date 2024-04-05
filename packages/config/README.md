
# Config

The Config Package contains essential configurations for different blockchain networks within the Stability ecosystem. It's designed to provide a clean, dependency-free set of data that can be easily imported and utilized across various parts of your application when interfacing with blockchain operations.

#### Key Components:

- **`Blockchains` Enum**: This enumeration defines the available blockchain networks within the Stability ecosystem, such as the Stability Testnet and the Global Trust Network (GTN). Each network is represented as an enum member, providing a clear and type-safe way of referencing these networks throughout your code.

- **`networks` Object**: This is the core of the file, containing detailed configurations for each blockchain network defined in the `Blockchains` enum. Each network's configuration includes:
  - `id`: The chainID for the network. 
  - `name`: The human-readable name of the network.
  - `nativeCurrency`: Information about the network's native currency, including its name, symbol, and decimal precision. Stability-utilizing networks eschew native cryptocurrencies, maintaining these values solely for EVM compatibility.
  - `rpcUrls`: RPC URLs for accessing the network. It includes both default and public endpoints.
  - `blockExplorers`: URLs to the network's block explorer websites, providing a way to view transactions and blocks on the network.
  - `contracts`: Addresses and other relevant information about smart contracts deployed on the network, such as the Multicall3 contract.
  - `logoUri`: The URI to a logo representing the network, useful for UI purposes.

#### Usage:

The `index.ts` configurations can be imported into various parts of your application, allowing you to use these settings independently of other dependencies. This modularity enhances your codebase's maintainability and scalability.

For instance, when your application components need to interact with these networks via the `viem` library, these configurations facilitate the dynamic establishment of network connections, clients, and other blockchain-centric operations.

For those seeking a pre-configured solution that incorporates `viem` and `ethers`, the Stability Team offers a ready-to-use `provider` package. This `provider` package, in turn, depends on the `config` package for its underlying configurations.

## Installation

To install the package, run the following command in your project directory:

```bash
npm i @stabilityprotocol/config
```

## License

This library is licensed under the MIT License. See the [LICENSE](LICENSE) file for more information.
