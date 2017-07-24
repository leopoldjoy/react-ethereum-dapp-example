const SET_COINBASE = 'redux-example/blockchain/SET_COINBASE';
const SET_BALANCE = 'redux-example/blockchain/SET_BALANCE';
const SET_LATEST_BLOCK_NUMBER = 'redux-example/blockchain/SET_LATEST_BLOCK_NUMBER';
const SET_LATEST_BLOCK_TIMESTAMP = 'redux-example/blockchain/SET_LATEST_BLOCK_TIMESTAMP';
const SET_LATEST_BLOCK_HASH = 'redux-example/blockchain/SET_LATEST_BLOCK_HASH';
const LOAD_CONTRACT_ABI = 'redux-example/blockchain/LOAD_CONTRACT_ABI';
const LOAD_CONTRACT_ABI_SUCCESS = 'redux-example/blockchain/LOAD_CONTRACT_ABI_SUCCESS';
const LOAD_CONTRACT_ABI_FAIL = 'redux-example/blockchain/LOAD_CONTRACT_ABI_FAIL';

const initialState = {
  coinbase: '',
  balance: '',
  latestBlockNumber: 0,
  latestBlockTimestamp: 0,
  latestBlockHash: '',
  abis: {
    metaCoin: ''
  }
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
    case SET_LATEST_BLOCK_NUMBER:
      return {
        ...state,
        latestBlockNumber: action.latestBlockNumber
      };
    case SET_LATEST_BLOCK_TIMESTAMP:
      return {
        ...state,
        latestBlockTimestamp: action.latestBlockTimestamp
      };
    case SET_LATEST_BLOCK_HASH:
      return {
        ...state,
        latestBlockHash: action.latestBlockHash
      };
    case LOAD_CONTRACT_ABI_SUCCESS:
      return {
        ...state,
        abis: {
          ...(state.abis),
          metaCoin: action.result.abi
        }
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

export function setLatestBlockNumber(latestBlockNumber) {
  return {
    type: SET_LATEST_BLOCK_NUMBER,
    latestBlockNumber
  };
}

export function setLatestBlockTimestamp(latestBlockTimestamp) {
  return {
    type: SET_LATEST_BLOCK_TIMESTAMP,
    latestBlockTimestamp
  };
}

export function setLatestBlockHash(latestBlockHash) {
  return {
    type: SET_LATEST_BLOCK_HASH,
    latestBlockHash
  };
}

export function loadContractABI(contractName) {
  return {
    types: [LOAD_CONTRACT_ABI, LOAD_CONTRACT_ABI_SUCCESS, LOAD_CONTRACT_ABI_FAIL],
    promise: ({ client }) =>
      client.get(`/loadContractABI/${contractName}`)
  };
}

