module.exports = {
  networks: {
    development: {
      host: "localhost",
      port: 8545,
      network_id: "*", // Match any network id
      gas: 1000000,
      from: '0x00a329c0648769A73afAc7F9381E08FB43dBEA72'
    }
  }
};
