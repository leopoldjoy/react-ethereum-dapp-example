
# React Ethereum Dapp Example

[![Build Status](https://travis-ci.org/leopoldjoy/react-ethereum-dapp-example.svg?branch=master&style=flat-square)](https://travis-ci.org/leopoldjoy/react-ethereum-dapp-example)
[![Dependency Status](https://david-dm.org/leopoldjoy/react-ethereum-dapp-example.svg?style=flat-square)](https://david-dm.org/leopoldjoy/react-ethereum-dapp-example)
[![devDependency Status](https://david-dm.org/leopoldjoy/react-ethereum-dapp-example/dev-status.svg?style=flat-square)](https://david-dm.org/leopoldjoy/react-ethereum-dapp-example?type=dev)

---

![Includes an example Ethereum token implmentation and UI](/images/metacoin.gif?raw=true "Includes an example Ethereum token implmentation and UI")

_Includes an example Ethereum token implmentation and UI._

## About

This is a starter boilerplate Ethereum dapp I've put together using the following technologies:

* [Ethereum Javascript API (Web3.js) 1.0-beta](https://github.com/ethereum/web3.js/tree/1.0)
* [Truffle](https://github.com/trufflesuite/truffle)
* [Parity](https://github.com/paritytech/parity)
* [React Redux Universal Hot Example](https://github.com/bertho-zero/react-redux-universal-hot-example) (implements [React](https://github.com/facebook/react), [React Router](https://github.com/reactjs/react-router), [Babel](http://babeljs.io), [Webpack](https://webpack.js.org/), [Redux](https://github.com/reactjs/redux), [Redux Dev Tools](https://github.com/reactjs/redux-devtools), [React Router Redux](https://github.com/reactjs/react-router-redux), [ESLint](http://eslint.org), and more)

I put this together as a starter repository for building react/redux dapps using the latest bleeding-edge Ethereum development technologies. Please note that the repository is still under development; I will be adding additional smart-contracts/UI examples.

## Features

<dl>
  <dt>Bleeding-edge technologies including Web3.js v1.0</dt>
  <dd>The repository aims to implement the most contemporary technologies and design patterns. For this reason we support the latest version of Web3.js, which is still in beta, so your dapp code will remain current going forward.</dd>

  <dt>Highly flexible and adaptable</dt>
  <dd>Quickly make changes and customize by starting with a minimalist Ethereum dapp implementation.</dd>

  <dt>Truffle support</dt>
  <dd>Built-in smart contract compilation, linking, deployment and binary management from the CLI.</dd>

  <dt>Fast, light, robust Ethereum implementation</dt>
  <dd>Parity provides an easy-to-use dapp browser and development environment equipt with a built-in wallet and fast transaction processing.</dd>

  <dt>Hot reload</dt>
  <dd>Enjoy the developer experience! Your saved changes to the CSS and JS are reflected instantaneously without refreshing the page! The state of application is preserved on the client.</dd>

  <dt>Next generation JavaScript</dt>
  <dd>Use JSX syntax with all ES6 features, and some of ES7 (see <a href=".babelrc">.babelrc</a>).</dd>

  <dt>CSS in modules</dt>
  <dd>Write composable, modular and maintenable CSS with your components.</dd>

  <dt>Predictable state management</dt>
  <dd>Unidirectional data flow with <a href="http://redux.js.org">Redux</a> helps you write applications that behave consistently and are easy to test. On top of that, it provides a great developer experience.</dd>

  <dt>Progressive web app & Offline-first</dt>
  <dd>Progressive Web Apps are user experiences that have the reach of the web, and are:<br>
Reliable - Load instantly and never show the downasaur, even in uncertain network conditions.<br>
Fast - Respond quickly to user interactions with silky smooth animations and no janky scrolling.<br>
Engaging - Feel like a natural app on the device, with an immersive user experience.<br><br>
This new level of quality allows Progressive Web Apps to earn a place on the user's home screen.</dd>

  <dt>Lazy loading & dynamic routing</dt>
  <dd>The code splitting makes the size of your main bundle almost fixed, and with react-router you can load application pieces on demand. You can send bundles to people who are only trained, such as administration.</dd>

  <dt>Universal rendering</dt>
  <dd>With the help of server side rendering the first rendering is never empty and performance is better. This is the time for example to prefetch the data.
<a href="https://github.com/halt-hammerzeit/webpack-isomorphic-tools">Webpack-isomorphic-tools</a> to allow require() work for statics both on client and server.</dd>

  <dt>SEO</dt>
  <dd>This project supports SEO for search engines even without support indexing of JavaScript content, thanks to server-side rendering.</dd>
</dl>

## Installation

Download the latest verion of Parity [here](https://github.com/paritytech/parity/releases).

Also ensure that you have the latest verion of Truffle installed globally:

```bash
npm install -g truffle
```

Finally install all package dependencies:

```bash
npm install
```

## Running Dev Environment

Run all of the following commands inside the project directory.

### Start Parity Development Chain

```bash
parity --chain dev --ui-interface 127.0.0.1 --jsonrpc-interface 127.0.0.1 --ws-interface 127.0.0.1 --ws-origins "*"
```

Note: we set `--ws-interface` and `--ws-origins` so that we can use websockets to subscribe to blockchain events.

### Compile and Migrate smart-contracts

```bash
truffle compile
truffle migrate
```

NOTE: after running `truffle migrate` open parity (at `http://127.0.0.1:8180/`) in a browser and confirm all of the transactions to complete the migration.

### Update Contract Deployment Addresses

Copy each smart-contract deployment address from the `truffle migrate` command output and update each corresponding address in [`/contractAddresses.js`](https://github.com/leopoldjoy/react-ethereum-dapp-example/blob/master/contractAddresses.js) accordingly.

### Start Dev Javascript Server

```bash
npm run dev
```

The first time it may take a little while to generate the first `webpack-assets.json` and complain with a few dozen `[webpack-isomorphic-tools] (waiting for the first Webpack build to finish)` printouts, but be patient. Give it 30 seconds.

You're good to go! :) Now you can access the dapp at: `http://localhost:3000`.

#### Using Redux DevTools

[Redux Devtools](https://github.com/gaearon/redux-devtools) are enabled by default in development.

- <kbd>CTRL</kbd>+<kbd>H</kbd> Toggle DevTools Dock
- <kbd>CTRL</kbd>+<kbd>Q</kbd> Move DevTools Dock Position
- see [redux-devtools-dock-monitor](https://github.com/gaearon/redux-devtools-dock-monitor) for more detailed information.

If you have the [Redux DevTools chrome extension](https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd) installed it will automatically be used on the client-side instead.

If you want to disable the dev tools during development, set `__DEVTOOLS__` to `false` in `/webpack/dev.config.js`.  
DevTools are not enabled during production by default.

## Explanation

Please see the [`react-redux-universal-hot-example documentation`](https://github.com/bertho-zero/react-redux-universal-hot-example#explanation) for an in-depth explanation of how the React/Redux portion of this dapp works.

#### Smart-Contracts

Smart-contracts are written inside the `/contracts` directory. The `truffle compile` command then creates corresponding `.json` files inside the `/build/contracts` directory.

For a smart-contracts to be deployed when `truffle migrate` is run it must be called with `.deploy()` in `/migrations/2_deploy_contracts.js` or any other migration file in the `./migrations` directory (note: you can add additional deployment files to this directory, simply increment the number at the beginning of the filename, e.g.: `3_anotha_one.js`).

For more info on Truffle and how it works please read the [documentation](http://truffleframework.com/docs/).

#### Web3.js Relationship with Parity

The Web3.js Javascript library that is used in the React/Redux portion of the dapp to interact with the Ethereum smart-contracts running on the Parity test chain via a websocket.

For more info on Parity and how it works please read the [wiki](https://github.com/paritytech/parity/wiki).

#### contractAddresses.js

The `/contractAddresses.js` file simply contains the current deployment addresses of the dapp's smart-contracts.

#### loadContractABI API

The `loadContractABI` API is used to get the Application Binary Interface (ABI) for the smart-contracts from their JSON files. It runs on the server-side of the app as it's easier to access the file-system that way.

## Roadmap 

Planned future additions:

- [ ] create page showing example use of `web3.eth.getStorageAt` method on [`StorageExample`](/contracts/StorageExample.sol) smart-contract
- [ ] make MetaCoin into a ERC20 standards-compliant token
- [ ] add example oracle smart-contract example that interacts with external data
- [ ] consider implementing [`truffle-contract`](https://github.com/trufflesuite/truffle-contract) for better Ethereum contract abstraction
- [ ] implement/document truffle unit tests with Travis CI
- [ ] add production environment deployment instructions

## Contributing

My aim is for this to function as both a learning resource and also a useful boilerplate for starting new projects. I am more than happy to accept external contributions to the project in the form of feedback, bug reports and even better - pull requests :) 

If you would like to submit a pull request, please make an effort to follow the guide in [CONTRIBUTING.md](CONTRIBUTING.md). 
 
---
Thanks for checking this out.

Created by:
– Leopold Joy, [@leopoldjoy](https://twitter.com/leopoldjoy)
