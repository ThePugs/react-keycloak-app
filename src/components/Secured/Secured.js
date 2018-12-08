import React, { Component } from 'react';
import Keycloak from 'keycloak-js';
import UserInfo from '../UserInfo';
import Logout from '../Logout';
import './secured.css';

class Secured extends Component {
  
  constructor(props) {
    super(props);
    this.state = { keycloak: null, isAuthenticated: false };
  }
  
  componentDidMount() {
    const keycloak = Keycloak('/keycloak.json');
    keycloak.init({onLoad: 'login-required'}).success(authenticated => {
      this.setState({keycloak: keycloak, isAuthenticated: authenticated});
    });
  }
  
  render() {
    if (this.state.keycloak) {
      if (this.state.isAuthenticated) {
        return (
          <div className="secured">
            <p>This is a keycloak-secured component, only visible to users successfully authenticated in Keycloak.</p>
            <UserInfo keycloak={this.state.keycloak} />
            <Logout keycloak={this.state.keycloak} />
          </div>
        );
      }
      else {
        return (<div>Unable to authenticate!</div>);
      }
    }
    else {
      return (
        <div>Initializing Keycloak...</div>
      );
    }
  }
  
}

export default Secured;
