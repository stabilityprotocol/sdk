import type { Config } from "@jest/types";

// Sync object
const config: Config.InitialOptions = {
  verbose: true,
  transform: {
    "^.+\\.tsx?$": "ts-jest",
  },
  extensionsToTreatAsEsm: [".ts"],
  testMatch: ["**/_tests_/**/*.test.ts"],
  testTimeout: 30000,
};
export default config;
