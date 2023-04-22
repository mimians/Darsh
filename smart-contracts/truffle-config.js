const HDWalletProvider = require('@truffle/hdwallet-provider');

const dotenv = require("dotenv")
dotenv.config()

const MNEMONIC = process.env.MNEMONIC;
const FTMKEY = process.env.FTMKEY

module.exports = {
    plugins: ["truffle-plugin-verify", "truffle-contract-size", "truffle-flatten", "truffle-plugin-stdjsonin"],
    verify: {
        preamble: "Author: Arogundade Ibrahim.\nVersion: 1.0 \nProject name: DarshProtocol"
    },
    api_keys: {
        ftmscan: FTMKEY,
        ftmscantestnet: FTMKEY
    },
    networks: {
        testnet: {
            provider: () => new HDWalletProvider(MNEMONIC, 'https://pre-rpc.bt.io'),
            network_id: 1029,
            confirmations: 2,
            timeoutBlocks: 9999999,
            skipDryRun: true,
            networkCheckTimeout: 999999999
        }
    },

    // Set default mocha options here, use special reporters, etc.
    mocha: {
        // timeout: 100000
    },

    // Configure your compilers
    compilers: {
        solc: {
            version: "0.8.17", // Fetch exact version from solc-bin (default: truffle's version)
            // docker: true,        // Use "0.5.1" you've installed locally with docker (default: false)
            settings: { // See the solidity docs for advice about optimization and evmVersion
                optimizer: {
                    enabled: true,
                    runs: 200
                },
                viaIR: true
                //  evmVersion: "byzantium"
            }
        }
    }
};