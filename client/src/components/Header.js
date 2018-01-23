import React, { Component } from 'react';
import {connect} from 'react-redux';
import { Link } from 'react-router-dom';

class Header extends Component {
  renderContent() {
    switch(this.props.auth) {
      case null:
          return 'Still deciding';
      case false:
        return <a href="/auth/google">Login With Google</a>;
      default:
        return <a href="/api/logout">Logout</a>;
    }
  }
  render() {
    return (
        <nav>
          <div className="nav-wrapper">
            <Link to={} className="left brand-logo">Emaily</Link>
            <ul id="nav-mobile" className="right">
              <li>{this.renderContent()}</li>
            </ul>
          </div>
        </nav>
    )
  }
}

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps)(Header);