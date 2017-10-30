module.exports = {
  // contracts_build_directory: './src/build', // Must be inside "/src" or else create-react-app complains
  networks: {
    development: {
      host: "localhost",
      port: 8545,
      network_id: "*", // Match any network id
      gas: 210000
    }
  }
};
