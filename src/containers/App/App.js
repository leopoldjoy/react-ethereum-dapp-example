import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { IndexLink } from 'react-router';
import { LinkContainer } from 'react-router-bootstrap';
import Navbar from 'react-bootstrap/lib/Navbar';
import Nav from 'react-bootstrap/lib/Nav';
import NavItem from 'react-bootstrap/lib/NavItem';
import Alert from 'react-bootstrap/lib/Alert';
import Helmet from 'react-helmet';
import { isLoaded as isInfoLoaded, load as loadInfo } from 'redux/modules/info';
import { isLoaded as isAuthLoaded, load as loadAuth /* , logout */ } from 'redux/modules/auth';
import { Notifs /* , InfoBar */ } from 'components';
import { push } from 'react-router-redux';
import config from 'config';
import { asyncConnect } from 'redux-connect';

@asyncConnect([
  {
    promise: ({ store: { dispatch, getState } }) => {
      const promises = [];

      if (!isAuthLoaded(getState())) {
        promises.push(dispatch(loadAuth()));
      }
      if (!isInfoLoaded(getState())) {
        promises.push(dispatch(loadInfo()));
      }
      return Promise.all(promises);
    }
  }
])
@connect(
  state => ({
    notifs: state.notifs,
    user: state.auth.user
  }),
  { /* logout, */ pushState: push }
)
export default class App extends Component {
  static propTypes = {
    children: PropTypes.element.isRequired,
    router: PropTypes.shape({
      location: PropTypes.object
    }).isRequired,
    user: PropTypes.shape({
      email: PropTypes.string
    }),
    notifs: PropTypes.shape({
      global: PropTypes.array
    }).isRequired,
    // logout: PropTypes.func.isRequired,
    pushState: PropTypes.func.isRequired
  };

  static defaultProps = {
    user: null
  };

  static contextTypes = {
    store: PropTypes.object.isRequired
  };

  componentWillReceiveProps(nextProps) {
    if (!this.props.user && nextProps.user) {
      // login
      const redirect = this.props.router.location.query && this.props.router.location.query.redirect;
      this.props.pushState(redirect || '/loginSuccess');
    } else if (this.props.user && !nextProps.user) {
      // logout
      this.props.pushState('/');
    }
  }

  // handleLogout = event => {
  //   event.preventDefault();
  //   this.props.logout();
  // };

  render() {
    const { notifs, children } = this.props;
    const styles = require('./App.scss');

    return (
      <div className={styles.app}>
        <Helmet {...config.app.head} />
        <Navbar fixedTop>
          <Navbar.Header>
            <Navbar.Brand>
              <IndexLink to="/" activeStyle={{ color: '#33e0ff' }}>
                <div className={styles.brand} />
                <span>
                  {config.app.title}
                </span>
              </IndexLink>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>

          <Navbar.Collapse>
            <Nav navbar>
              <LinkContainer to="/metacoin">
                <NavItem>MetaCoin</NavItem>
              </LinkContainer>
            </Nav>
            <Nav navbar pullRight>
              <NavItem
                target="_blank"
                title="View on Github"
                href="https://github.com/leopoldjoy/react-ethereum-dapp-example"
              >
                <i className="fa fa-github" />
              </NavItem>
            </Nav>
          </Navbar.Collapse>
        </Navbar>

        <div className={styles.appContent}>
          {notifs.global &&
            <div className="container">
              <Notifs
                className={styles.notifs}
                namespace="global"
                NotifComponent={props =>
                  (<Alert bsStyle={props.kind}>
                    {props.message}
                  </Alert>)}
              />
            </div>}

          {children}
        </div>
        {/* <InfoBar /> */}

        <div className="well text-center">
          Have questions? Ask for help{' '}
          <a
            href="https://github.com/leopoldjoy/react-ethereum-example-dapp/issues"
            target="_blank"
            rel="noopener noreferrer"
          >
            on Github
          </a>.
        </div>
      </div>
    );
  }
}
