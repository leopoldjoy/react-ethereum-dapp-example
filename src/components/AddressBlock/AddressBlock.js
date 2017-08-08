import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Blockies from 'ethereum-blockies/react-component';

export default class AddressBlock extends Component {
  static propTypes = {
    address: PropTypes.string.isRequired,
    balance: PropTypes.string,
    currency: PropTypes.string,
    noBalance: PropTypes.bool
  };
  static defaultProps = {
    balance: '',
    currency: '',
    noBalance: false
  };
  render() {
    const { address, balance, currency, noBalance } = this.props;
    const styles = require('./AddressBlock.scss');

    return (
      <div
        className={`${styles.blockWrap} ${(noBalance ? styles.blockWrapNoBalance : null)}`}
      >
        <div className={styles.blockImg}>
          <Blockies opts={{ seed: address, size: (noBalance ? 6 : 8), scale: (noBalance ? 5 : 5) }} />
        </div>
        <div className={styles.infoWrap}>
          <div className={styles.address}>{address}</div>
          {(!noBalance) &&
            <div className={styles.balance}>{balance} <span>{currency}</span></div>
          }
        </div>
      </div>
    );
  }
}
