const SET_AMOUNT_TO_SEND = 'redux-example/metaCoin/SET_AMOUNT_TO_SEND';
const SET_ADDRESS_TO_SEND = 'redux-example/metaCoin/SET_ADDRESS_TO_SEND';
const SET_META_BALANCE = 'redux-example/metaCoin/SET_META_BALANCE';
const SET_PAST_TRANSACTIONS = 'redux-example/metaCoin/SET_PAST_TRANSACTIONS';
const SET_USER_BALANCES = 'redux-example/metaCoin/SET_USER_BALANCES';

const initialState = {
  amountToSend: '',
  addressToSend: '',
  metaBalance: '',
  pastTransactions: [],
  userBalances: {}
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
    case SET_USER_BALANCES:
      return {
        ...state,
        userBalances: action.userBalances
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

export function setUserBalances(userBalances) {
  return {
    type: SET_USER_BALANCES,
    userBalances
  };
}
