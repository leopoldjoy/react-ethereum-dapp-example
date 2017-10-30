import React, { Component } from 'react';
import PropTypes from 'prop-types';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  static propTypes = {
    children: PropTypes.node
  };
  render() {
    const { children } = this.props;

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <div className="App-content">
          {children}
        </div>
      </div>
    );
  }
}

export default App;
