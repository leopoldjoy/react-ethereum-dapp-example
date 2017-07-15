import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { socket } from 'app';
import * as blockchainActions from 'redux/modules/blockchain';
import web3 from '../../web3';

@connect(state => (
  {
    user: state.auth.user,
    coinbase: state.blockchain.coinbase
  }),
{
  ...blockchainActions
}
)
export default class MetaCoin extends Component {
  static propTypes = {
    user: PropTypes.shape({
      email: PropTypes.string
    }),
    coinbase: PropTypes.string.isRequired,
    setCoinbase: PropTypes.func.isRequired
  };

  static defaultProps = {
    user: null
  };

  state = {
    message: '',
    messages: []
  };

  componentDidMount() {
    // Get and set coinbase if it hasn't been set yet
    if (this.props.coinbase.length === 0) {
      web3.eth.getCoinbase().then(coinbase => {
        this.props.setCoinbase(coinbase);
        // Set default address
        web3.eth.defaultAccount = coinbase;
      });
    }

    socket.on('msg', this.onMessageReceived);
    setTimeout(() => {
      socket.emit('history', { offset: 0, length: 100 });
    }, 100);
  }

  componentWillUnmount() {
    socket.removeListener('msg', this.onMessageReceived);
  }

  onMessageReceived = data => {
    const messages = this.state.messages;
    messages.push(data);
    this.setState({ messages });
  };

  handleSubmit = event => {
    event.preventDefault();

    const { user } = this.props;
    const msg = this.state.message;

    this.setState({ message: '' });

    socket.emit('msg', {
      from: (user && user.email) || 'Anonymous',
      text: msg
    });
  };

  render() {
    const { coinbase } = this.props;
    const style = require('./MetaCoin.scss');

    return (
      <div className={`${style.metacoin} container`}>
        <h1>MetaCoin</h1>

        <h2>Your Address: {coinbase}</h2>

        <div>
          <ul>
            {this.state.messages.map(msg =>
              (<li key={`metacoin.msg.${msg.id}`}>
                {msg.from}: {msg.text}
              </li>)
            )}
          </ul>
          <form onSubmit={this.handleSubmit}>
            <input
              type="text"
              ref={c => {
                this.message = c;
              }}
              placeholder="Enter your message"
              value={this.state.message}
              onChange={event => {
                this.setState({ message: event.target.value });
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
