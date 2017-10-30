import * as types from './blockchain-types';

export function setCoinbase(coinbase) {
  return {
    type: types.SET_COINBASE,
    coinbase
  };
}

export function setBalance(balance) {
  return {
    type: types.SET_BALANCE,
    balance
  };
}

export function setLatestBlockNumber(latestBlockNumber) {
  return {
    type: types.SET_LATEST_BLOCK_NUMBER,
    latestBlockNumber
  };
}

export function setLatestBlockTimestamp(latestBlockTimestamp) {
  return {
    type: types.SET_LATEST_BLOCK_TIMESTAMP,
    latestBlockTimestamp
  };
}

export function setLatestBlockHash(latestBlockHash) {
  return {
    type: types.SET_LATEST_BLOCK_HASH,
    latestBlockHash
  };
}
