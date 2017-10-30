import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './NotFound.css';

class NotFound extends Component {
  static propTypes = {
    children: PropTypes.node
  };
  render() {
    const { children } = this.props;

    return (
      <div className="NotFound">
        <header className="NotFound-header">
          <h1 className="NotFound-title">PAGE NOT FOUND</h1>
        </header>
        <p className="NotFound-content">
          {children}
        </p>
      </div>
    );
  }
}

export default NotFound;
