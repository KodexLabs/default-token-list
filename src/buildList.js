const { version } = require("../package.json");
const boba = require("./tokens/boba.json");

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
    tags: {},
    logoURI: "ipfs://QmXRLVmTmtpPNFfCaWDpkjE4tGFt5GxVJkmekRP3d9HGYm",
    keywords: ["koyo", "stableswap", "default"],
    tokens: [...boba].sort((t1, t2) => {
      if (t1.chainId === t2.chainId) {
        return t1.symbol.toLowerCase() < t2.symbol.toLowerCase() ? -1 : 1;
      }
      return t1.chainId < t2.chainId ? -1 : 1;
    }),
  };
};
