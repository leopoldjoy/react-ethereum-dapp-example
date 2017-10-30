import * as types from './metaCoin-types';

export function setAmountToSend(amount) {
  return {
    type: types.SET_AMOUNT_TO_SEND,
    amount
  };
}

export function setAddressToSend(address) {
  return {
    type: types.SET_ADDRESS_TO_SEND,
    address
  };
}

export function setMetaBalance(balance) {
  return {
    type: types.SET_META_BALANCE,
    balance
  };
}

export function setPastTransactions(pastTransactions) {
  return {
    type: types.SET_PAST_TRANSACTIONS,
    pastTransactions
  };
}

export function setUserBalances(userBalances) {
  return {
    type: types.SET_USER_BALANCES,
    userBalances
  };
}
