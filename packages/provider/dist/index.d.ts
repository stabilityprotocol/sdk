import { ethers } from "ethers";
export declare class StabilityGtnRpcProvider extends ethers.providers.JsonRpcProvider {
    constructor(apiKey: string);
}
export declare class StabilityTestnetRpcProvider extends ethers.providers
    .JsonRpcProvider {
    constructor();
}
