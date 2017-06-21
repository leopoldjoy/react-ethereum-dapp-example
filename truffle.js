module.exports = {
  networks: {
    development: {
      host: "localhost",
      port: 8545,
      network_id: "*", // Match any network id
      gas: 1000000,
      from: '0x00afcDCA7eC16beA840F3539250a1Dee30FC0A84'
    }
  }
};
