const { createDefaultPreset } = require("ts-jest");

const tsJestTransformCfg = createDefaultPreset().transform;

/** @type {import("jest").Config} **/
module.exports = {
    testEnvironment: "node",
    transform: {
        ...tsJestTransformCfg,
    },
    testMatch: ["<rootDir>/test/**/*.spec.ts"],

    // Check coverage all
    collectCoverage: true,
    collectCoverageFrom: [
        'src/**/*.ts',
    ],

    // Set % wanted for test, global and file
    coverageThreshold: {
        global: {
            branches: 50,
            functions: 50,
            lines: 50,
            statements: 50,
        },
        'src/notificationManager.ts': {
            branches: 50
        }
    },
};
