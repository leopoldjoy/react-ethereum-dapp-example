import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  static propTypes = {
    children: PropTypes.node
  };
  render() {
    const { children, metaCoinLinkHandler } = this.props;

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
          <a onClick={metaCoinLinkHandler}>MetaCoin</a>
        </header>
        <div className="App-content">
          {children}
        </div>
      </div>
    );
  }
}

App.propTypes = {
  metaCoinLinkHandler: PropTypes.func.isRequired
};

export default connect(
  null,
  dispatch => ({
    metaCoinLinkHandler: () => dispatch(push('/metacoin'))
  })
)(App);
