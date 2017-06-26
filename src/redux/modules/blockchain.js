const SET_COINBASE = 'redux-example/blockchain/SET_COINBASE';
const SET_BALANCE = 'redux-example/blockchain/SET_BALANCE';

const initialState = {
  coinbase: '',
  balance: ''
};

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case SET_COINBASE:
      return {
        ...state,
        coinbase: action.coinbase
      };
    case SET_BALANCE:
      return {
        ...state,
        balance: action.balance
      };
    default:
      return state;
  }
}

export function setCoinbase(coinbase) {
  return {
    type: SET_COINBASE,
    coinbase
  };
}

export function setBalance(balance) {
  return {
    type: SET_BALANCE,
    balance
  };
}
