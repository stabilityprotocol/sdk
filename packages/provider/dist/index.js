"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StabilityTestnetRpcProvider = exports.StabilityGtnRpcProvider = void 0;
const ethers_1 = require("ethers");
const config_1 = require("config");
class StabilityGtnRpcProvider extends ethers_1.ethers.providers.JsonRpcProvider {
    constructor(apiKey) {
        const url = `${config_1.networks[config_1.Blockchains.STABILITY_GTN].rpcUrl}/${apiKey}`;
        super(url, config_1.networks[config_1.Blockchains.STABILITY_GTN].id);
    }
}
exports.StabilityGtnRpcProvider = StabilityGtnRpcProvider;
class StabilityTestnetRpcProvider extends ethers_1.ethers.providers
    .JsonRpcProvider {
    constructor() {
        super(config_1.networks[config_1.Blockchains.STABILITY_TESTNET].rpcUrl, config_1.networks[config_1.Blockchains.STABILITY_TESTNET].id);
    }
}
exports.StabilityTestnetRpcProvider = StabilityTestnetRpcProvider;
//# sourceMappingURL=index.js.map