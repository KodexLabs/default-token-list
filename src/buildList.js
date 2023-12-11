const { version } = require("../package.json");
const ethereum = require("./tokens/ethereum.json");

module.exports = function buildList() {
    const parsed = version.split(".");
    return {
        name: "Kodex list",
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
        },
        logoURI: "https://tokens.kodex.io/token-lists/kodex.png",
        keywords: [
            "kodex",
            "default",
            "token",
            "list",
            "mainnet",
            "ethereum"
        ],
        tokens: [...ethereum].sort(
            (t1, t2) => {
                if (t1.chainId === t2.chainId) {
                    return t1.symbol.toLowerCase() < t2.symbol.toLowerCase()
                        ? -1
                        : 1;
                }
                return t1.chainId < t2.chainId ? -1 : 1;
            }
        ),
    };
};
