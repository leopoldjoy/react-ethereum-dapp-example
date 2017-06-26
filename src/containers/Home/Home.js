import React, { Component } from 'react';
import PropTypes from 'prop-types';
// import { Link } from 'react-router';
// import { CounterButton, GithubButton } from 'components';
// import config from 'config';
import Helmet from 'react-helmet';
import { connect } from 'react-redux';
import * as blockchainActions from 'redux/modules/blockchain';
import Web3 from 'web3';

// Setup web3 connection
const web3 = new Web3('ws://127.0.0.1:8546');

@connect(state => (
  {
    online: state.online,
    coinbase: state.blockchain.coinbase,
    balance: state.blockchain.balance
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
    setCoinbase: PropTypes.func.isRequired,
    setBalance: PropTypes.func.isRequired
  };

  componentDidMount() {
    web3.eth.getCoinbase().then(coinbase => {
      this.props.setCoinbase(coinbase);
    });
    web3.eth.defaultAccount = '0x00a329c0648769a73afac7f9381e08fb43dbea72';
    web3.eth.getBalance(web3.eth.defaultAccount).then(balance => {
      this.props.setBalance(balance);
    });
  }

  render() {
    const styles = require('./Home.scss');

    const { coinbase, balance } = this.props;
    return (
      <div className={styles.home}>
        <Helmet title="Home" />

        <div className="container">

          <p>Information:</p>

          <p>Information:</p>

          <p>Information:</p>

          <ul>
            <li>
              Coinbase Address: <code>{coinbase}</code>
            </li>
            <li>
              Balance: <code>{balance}</code>
            </li>
            <li>
              Latest Block Number: <code>test</code>
            </li>
            <li>
              Latest Block Timestamp: <code>test</code>
            </li>
            <li>
              Latest Block Hash: <code>test</code>
            </li>
            <li>
              Contract String: <code>test</code>
            </li>
            <li>
              Favourite Python: <code>test</code>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
