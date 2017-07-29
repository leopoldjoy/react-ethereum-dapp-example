import React, { Component } from 'react';
import PropTypes from 'prop-types';
// import { Link } from 'react-router';
// import { CounterButton, GithubButton } from 'components';
// import config from 'config';
import Helmet from 'react-helmet';
import { connect } from 'react-redux';
import * as blockchainActions from 'redux/modules/blockchain';
import web3 from '../../web3';

@connect(state => (
  {
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
)
export default class Home extends Component {
  static propTypes = {
    // online: PropTypes.bool.isRequired,
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
    const styles = require('./Home.scss');

    const { coinbase, balance, latestBlockNumber, latestBlockTimestamp, latestBlockHash } = this.props;
    return (
      <div className={styles.home}>
        <Helmet title="Home" />

        <div className="container">

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
