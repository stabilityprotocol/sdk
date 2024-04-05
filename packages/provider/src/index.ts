import { StabilityGtnRpcProviderEthers, StabilityTestnetRpcProviderEthers } from "./ethers_setup";

// Import functions from viem_setup.ts
import { createStabilityTestnetClientViem, createStabilityGtnClientViem } from "./viem_setup";

// Export the imported classes and functions
export {
  StabilityGtnRpcProviderEthers,
  StabilityTestnetRpcProviderEthers,
  createStabilityTestnetClientViem,
  createStabilityGtnClientViem,
};