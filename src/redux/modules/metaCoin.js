const SET_AMOUNT_TO_SEND = 'redux-example/metaCoin/SET_AMOUNT_TO_SEND';
const SET_ADDRESS_TO_SEND = 'redux-example/metaCoin/SET_ADDRESS_TO_SEND';
const SET_META_BALANCE = 'redux-example/metaCoin/SET_META_BALANCE';
const SET_PAST_TRANSACTIONS = 'redux-example/metaCoin/SET_PAST_TRANSACTIONS';

const initialState = {
  amountToSend: '',
  addressToSend: '',
  metaBalance: '',
  pastTransactions: []
};

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case SET_AMOUNT_TO_SEND:
      return {
        ...state,
        amountToSend: action.amount
      };
    case SET_ADDRESS_TO_SEND:
      return {
        ...state,
        addressToSend: action.address
      };
    case SET_META_BALANCE:
      return {
        ...state,
        metaBalance: action.balance
      };
    case SET_PAST_TRANSACTIONS:
      return {
        ...state,
        pastTransactions: action.pastTransactions
      };
    default:
      return state;
  }
}

export function setAmountToSend(amount) {
  return {
    type: SET_AMOUNT_TO_SEND,
    amount
  };
}

export function setAddressToSend(address) {
  return {
    type: SET_ADDRESS_TO_SEND,
    address
  };
}

export function setMetaBalance(balance) {
  return {
    type: SET_META_BALANCE,
    balance
  };
}

export function setPastTransactions(pastTransactions) {
  return {
    type: SET_PAST_TRANSACTIONS,
    pastTransactions
  };
}
