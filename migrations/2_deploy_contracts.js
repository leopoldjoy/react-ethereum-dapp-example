var updateJsonFile = require('update-json-file');

var ConvertLib = artifacts.require("./ConvertLib.sol");
var MetaCoin = artifacts.require("./MetaCoin.sol");
var StorageExample = artifacts.require("./StorageExample.sol");

module.exports = function(deployer) {
  var newAddresses = {};
  deployer.deploy(ConvertLib);
  deployer.link(ConvertLib, MetaCoin);
  deployer.deploy(MetaCoin).then(() => {
    updateAddressJSON('MetaCoin', MetaCoin.address); // We save the deployment address for use by Web3.js
  });
  deployer.deploy(StorageExample).then(() => {
    updateAddressJSON('StorageExample', StorageExample.address);
  });
};

// This function saves the provided contract address to the "build/contract/addresses.json" JSON file
function updateAddressJSON(name, address) {
  var filePath = './build/contracts/addresses.json';
  var options = { defaultValue: () => ({}) }; // Default is an empty object

  updateJsonFile(filePath, function (data) {
    data[name] = address; // "defaultValue" factory function is run each time, so `data` is a new object each time
    return data;
  }, options);
}
