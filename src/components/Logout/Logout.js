import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import './logout.css';

class Logout extends Component {
  
  logout() {
    this.props.history.push("/");
    this.props.keycloak.logout();
  }
  
  render() {
    return (
      <button className='logout' onClick={ () => this.logout() }>
        Logout
      </button>
    );
  }
  
}

export default withRouter(Logout);
