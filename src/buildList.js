const { version } = require("../package.json");
const aurora = require("./tokens/aurora.json");
const boba = require("./tokens/boba.json");
const moonriver = require("./tokens/moonriver.json");
const polygon = require("./tokens/polygon.json");

module.exports = function buildList() {
    const parsed = version.split(".");
    return {
        name: "Koyo Finance list",
        timestamp: new Date().toISOString(),
        version: {
            major: +parsed[0],
            minor: +parsed[1],
            patch: +parsed[2],
        },
        tags: {
            stablecoin: {
                name: "Stablecoin",
                description:
                    "Tokens that are fixed to an external asset, e.g. the US dollar",
            },
            lstake: {
                name: "Liq Staking Tokens",
                description:
                    "Tokens that represent a liquid alternative to a staked asset, e.g. ETH and stETH or NEAR and stNEAR",
            },
            xc: {
                name: "XChain Tokens",
                description: "Tokens that are available on all Pokadot and Kusama parachains"
            },
            multichain: {
                name: "Multichain Tokens",
                description: "Tokens that where bridged over from other networks using the Multichain bridge"
            },
            gov: {
                name: "Governance Tokens",
                description:
                    "Tokens whose holders have voting rights to the corresponding protocol",
            },
            dex: {
                name: "DEX Tokens",
                description: "Protocol tokens of Decentralized Exchanges",
            },
            bodh: {
                name: "Bodh bTokens",
                description:
                    "Tokens that generate interest on the Bodh Finance Protocol",
            },
        },
        logoURI: "ipfs://QmXRLVmTmtpPNFfCaWDpkjE4tGFt5GxVJkmekRP3d9HGYm",
        keywords: [
            "koyo",
            "stableswap",
            "weighted",
            "dex",
            "amm",
            "boba",
            "aurora",
            "default",
        ],
        tokens: [...aurora, ...boba, ...moonriver, ...polygon].sort((t1, t2) => {
            if (t1.chainId === t2.chainId) {
                return t1.symbol.toLowerCase() < t2.symbol.toLowerCase()
                    ? -1
                    : 1;
            }
            return t1.chainId < t2.chainId ? -1 : 1;
        }),
    };
};
