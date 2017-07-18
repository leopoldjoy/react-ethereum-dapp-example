import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as blockchainActions from '../../redux/modules/blockchain';
import * as metaCoinActions from '../../redux/modules/metaCoin';
import web3 from '../../web3';

let MetaCoinContract;

@connect(state => (
  {
    // user: state.auth.user,
    coinbase: state.blockchain.coinbase,
    amountToSend: state.metaCoin.amountToSend,
    addressToSend: state.metaCoin.addressToSend,
    metaBalance: state.metaCoin.metaBalance,
    pastTransactions: state.metaCoin.pastTransactions
  }),
{
  ...blockchainActions,
  ...metaCoinActions
}
)
export default class MetaCoin extends Component {
  static propTypes = {
    // user: PropTypes.shape({
    //   email: PropTypes.string
    // }),
    coinbase: PropTypes.string.isRequired,
    setCoinbase: PropTypes.func.isRequired,
    loadContractABI: PropTypes.func.isRequired,
    setAmountToSend: PropTypes.func.isRequired,
    setAddressToSend: PropTypes.func.isRequired,
    amountToSend: PropTypes.string.isRequired,
    addressToSend: PropTypes.string.isRequired,
    metaBalance: PropTypes.string.isRequired,
    setMetaBalance: PropTypes.func.isRequired,
    pastTransactions: PropTypes.arrayOf(PropTypes.object).isRequired,
    setPastTransactions: PropTypes.func.isRequired
  };

  componentDidMount() {
    // Get and set coinbase if it hasn't been set yet
    if (this.props.coinbase.length === 0) {
      web3.eth.getCoinbase().then(coinbase => {
        this.props.setCoinbase(coinbase);
        // Set default address
        web3.eth.defaultAccount = coinbase;
        this.initWeb3Subscriptions();
      });
    } else {
      this.initWeb3Subscriptions();
    }
  }

  onMessageReceived = data => {
    const messages = this.state.messages;
    messages.push(data);
    this.setState({ messages });
  };

  updateWeb3Info = () => {
    const { coinbase, setMetaBalance } = this.props;

    // Get and set user MetaCoin balance
    MetaCoinContract.methods.getBalance(coinbase).call({
      from: coinbase
    }).then(result => {
      setMetaBalance(result);
    }, err => {
      console.error(err);
    });

    // Also load past transactions array
    this.loadPastTransactions();
  }

  initWeb3Subscriptions = () => {
    const { coinbase, loadContractABI } = this.props;

    loadContractABI('MetaCoin').then(result => {
      // Create an instance of the contract
      MetaCoinContract = new web3.eth.Contract(
        result.abi,
        '0x670d0f1021c1c8fc068202386bb74772749f765c',
        {
          from: coinbase,
          gasPrice: '20000000000', // default gas price in wei, 20 gwei in this case
        }
      );

      web3.eth.subscribe('newBlockHeaders', (/* err, results */) => {
        this.updateWeb3Info();
      });

      // Initial call
      this.updateWeb3Info();
    });
  }

  loadPastTransactions = () => {
    const { setPastTransactions } = this.props;
    MetaCoinContract.getPastEvents('Transfer', {
      fromBlock: 0,
      toBlock: 'latest'
    }, (err, results) => {
      if (!err) {
        setPastTransactions(results);
      }
    });
  }

  handleSubmit = event => {
    event.preventDefault();
    const { amountToSend, addressToSend, coinbase } = this.props;

    MetaCoinContract.methods.sendCoin(addressToSend, amountToSend).send({
      from: coinbase
    }).then(() => {}, err => {
      console.error('There was an error sending the transaction!');
      console.error(err);
    });
  };

  render() {
    const {
      coinbase,
      metaBalance,
      amountToSend,
      setAmountToSend,
      addressToSend,
      setAddressToSend,
      pastTransactions
    } = this.props;
    const style = require('./MetaCoin.scss');

    return (
      <div className={`${style.metacoin} container`}>
        <h1>MetaCoin</h1>

        <h4>Your Address: {coinbase}</h4>
        <h4>Your Balance: {metaBalance}</h4>
        {(pastTransactions.length > 0) && <h4>Past Transactions:</h4>}

        <div>
          <ul>
            {pastTransactions.map(txn =>
              (<li key={`metacoin.txn.${txn.id}`}>
                <div className={`${style.txnAddress}`}>{txn.returnValues._from}</div>
                <div className={`${style.txnAmount}`}>
                  {txn.returnValues._value} MetaCoin<br />
                  ======>
                </div>
                <div className={`${style.txnAddress}`}>{txn.returnValues._to}</div>
              </li>)
            )}
          </ul>
          <form onSubmit={this.handleSubmit}>
            <input
              type="text"
              placeholder="Amount to send..."
              value={amountToSend}
              onChange={event => {
                setAmountToSend(event.target.value);
              }}
            />
            <input
              type="text"
              placeholder="Address to send to..."
              value={addressToSend}
              onChange={event => {
                setAddressToSend(event.target.value);
              }}
            />
            <button className="btn" onClick={this.handleSubmit}>
              Send
            </button>
          </form>
        </div>
      </div>
    );
  }
}
