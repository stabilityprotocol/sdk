# Provider

The Stability Provider offers developers a convenient way to integrate with the Stability Testnet and Global Trust Network (GTN) using the ethers.js library. This provider simplifies the process of creating ethers.js providers by automatically configuring them with the correct network settings.

## Example

```ts
const gtnProvider = new StabilityGtnRpcProvider("your_api_key");

async function printCurrentBlockNumber(provider) {
  const blockNumber = await provider.getBlockNumber();
  console.log(`Current Block Number: ${blockNumber}`);
}

printCurrentBlockNumber(gtnProvider);
```

## License

This library is licensed under the MIT License. See the [LICENSE](LICENSE) file for more information.
