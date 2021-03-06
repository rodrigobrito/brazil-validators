"use strict";
module.exports = function(config) {
    config.set({
        frameworks: ["jasmine", "karma-typescript"],
        files: [
            { pattern: "src/**/*.ts" }
        ],
        preprocessors: {
            "src/**/*.ts": ["karma-typescript"]
        },
        reporters: ["dots", "karma-typescript"],
        karmaTypescriptConfig: {
            tsconfig: "./tsconfig.test.json"
        },
        logLevel: config.LOG_INFO,
        browsers: ["Chrome"]
    });
};