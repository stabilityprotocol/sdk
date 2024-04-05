import { defineChain } from "viem"; // Import defineChain from viem
import { networks, Blockchains } from "@stabilityprotocol/config" // Import the extracted configurations and enum

export const networksConfig = {
  [Blockchains.STABILITY_TESTNET]: defineChain(networks[Blockchains.STABILITY_TESTNET]),
  [Blockchains.STABILITY_GTN]: defineChain(networks[Blockchains.STABILITY_GTN]),
};