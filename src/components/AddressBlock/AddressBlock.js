import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Blockies from 'ethereum-blockies/react-component';
import './AddressBlock.css';

class AddressBlock extends Component {
  render() {
    const { address, balance, currency, noBalance } = this.props;

    return (
      <div
        className={'blockWrap' + (noBalance ? ' blockWrapNoBalance' : '')}
      >
        <div className='blockImg'>
          <Blockies opts={{ seed: address, size: (noBalance ? 6 : 8), scale: (noBalance ? 5 : 5) }} />
        </div>
        <div className='infoWrap'>
          <div className='address'>{address}</div>
          {(!noBalance) &&
            <div className='balance'>{balance} <span>{currency}</span></div>
          }
        </div>
      </div>
    );
  }
}

AddressBlock.propTypes = {
  address: PropTypes.string.isRequired,
  balance: PropTypes.string,
  currency: PropTypes.string,
  noBalance: PropTypes.bool
};

AddressBlock.defaultProps = {
  balance: '',
  currency: '',
  noBalance: false
};

export default AddressBlock;
