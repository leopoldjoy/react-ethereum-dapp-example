import * as types from '../actions/metaCoin-types';

const initialState = {
  amountToSend: '',
  addressToSend: '',
  metaBalance: '',
  pastTransactions: [],
  userBalances: {}
};

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case types.SET_AMOUNT_TO_SEND:
      return {
        ...state,
        amountToSend: action.amount
      };
    case types.SET_ADDRESS_TO_SEND:
      return {
        ...state,
        addressToSend: action.address
      };
    case types.SET_META_BALANCE:
      return {
        ...state,
        metaBalance: action.balance
      };
    case types.SET_PAST_TRANSACTIONS:
      return {
        ...state,
        pastTransactions: action.pastTransactions
      };
    case types.SET_USER_BALANCES:
      return {
        ...state,
        userBalances: action.userBalances
      };
    default:
      return state;
  }
}
