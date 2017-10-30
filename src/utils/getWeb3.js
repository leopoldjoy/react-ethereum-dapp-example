/*
 * This function is used to access the browser's web3 provider (e.g. MetaMask)
 */

import Web3 from 'web3';

export default function getWeb3() {
  if (typeof window.web3 === 'undefined') {
    // No web3 injected from the browser, use fallback...
    window.web3 = new Web3('ws://127.0.0.1:8546');
  }

  // window.web3 == web3 most of the time, so we don't override the provided web3 and instead just wrap it in Web3
  var myWeb3 = new Web3(window.web3.currentProvider); 

  // The default account doesn't seem to be persisted, so copy it to our new instance
  myWeb3.eth.defaultAccount = window.web3.eth.defaultAccount;

  return myWeb3;
}
