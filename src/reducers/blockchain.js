import * as types from '../actions/blockchain-types';

const initialState = {
  coinbase: '',
  balance: '',
  latestBlockNumber: 0,
  latestBlockTimestamp: 0,
  latestBlockHash: ''
};

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case types.SET_COINBASE:
      return {
        ...state,
        coinbase: action.coinbase
      };
    case types.SET_BALANCE:
      return {
        ...state,
        balance: action.balance
      };
    case types.SET_LATEST_BLOCK_NUMBER:
      return {
        ...state,
        latestBlockNumber: action.latestBlockNumber
      };
    case types.SET_LATEST_BLOCK_TIMESTAMP:
      return {
        ...state,
        latestBlockTimestamp: action.latestBlockTimestamp
      };
    case types.SET_LATEST_BLOCK_HASH:
      return {
        ...state,
        latestBlockHash: action.latestBlockHash
      };
    default:
      return state;
  }
}
