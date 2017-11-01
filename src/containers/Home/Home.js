import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as blockchainActions from '../../actions/blockchain';
import getWeb3 from '../../utils/getWeb3';
import './Home.css';

const web3 = getWeb3();

export class Home extends Component {
  componentDidMount() {
    // Get and then set coinbase address
    web3.eth.getCoinbase().then(coinbase => {
      this.props.setCoinbase(coinbase);
      // Set default address
      web3.eth.defaultAccount = coinbase;
      // Get and then set default account balance
      return web3.eth.getBalance(coinbase, () => {}).then(balance => {
        this.props.setBalance(balance);
      });
    });
    // Get latest block number
    web3.eth.getBlockNumber().then(latestBlockNumber => {
      // Set latest block number
      this.props.setLatestBlockNumber(latestBlockNumber);
      // Get and then set latest block timestamp
      return web3.eth.getBlock(latestBlockNumber).then(latestBlock => {
        this.props.setLatestBlockTimestamp(latestBlock.timestamp);
        this.props.setLatestBlockHash(latestBlock.hash);
      });
    });
  }

  render() {
    const { coinbase, balance, latestBlockNumber, latestBlockTimestamp, latestBlockHash } = this.props;

    return (
      <div className="Home-wrap">
        <div>
          <h1>Information:</h1>

          <ul>
            <li>
              Coinbase Address: <code>{coinbase}</code>
            </li>
            <li>
              Balance: <code>{balance}</code>
            </li>
            <li>
              Latest Block Number: <code>{latestBlockNumber}</code>
            </li>
            <li>
              Latest Block Timestamp: <code>{latestBlockTimestamp}</code>
            </li>
            <li>
              Latest Block Hash: <code>{latestBlockHash}</code>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

Home.propTypes = {
  coinbase: PropTypes.string.isRequired,
  balance: PropTypes.string.isRequired,
  latestBlockNumber: PropTypes.number.isRequired,
  latestBlockTimestamp: PropTypes.number.isRequired,
  latestBlockHash: PropTypes.string.isRequired,
  setCoinbase: PropTypes.func.isRequired,
  setBalance: PropTypes.func.isRequired,
  setLatestBlockNumber: PropTypes.func.isRequired,
  setLatestBlockTimestamp: PropTypes.func.isRequired,
  setLatestBlockHash: PropTypes.func.isRequired
};

export default connect(
  state => ({
    online: state.online,
    coinbase: state.blockchain.coinbase,
    balance: state.blockchain.balance,
    latestBlockNumber: state.blockchain.latestBlockNumber,
    latestBlockTimestamp: state.blockchain.latestBlockTimestamp,
    latestBlockHash: state.blockchain.latestBlockHash
  }),
  {
    ...blockchainActions
  }
  // dispatch => ({
  //   setSelectedCountry: bindActionCreators(countriesAndVillagesActions.setSelectedCountry, dispatch)
  // })
)(Home);
