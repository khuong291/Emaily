import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Payments from "./Payments";

class Header extends Component {
  renderContent() {
    const { auth } = this.props;
    if (auth === null) {
      return;
    }
    if (auth && auth._id) {
      return (
        <div>
          <li>
            <Payments />
          </li>
          <li style={{ margin: "0 10px" }}>Credit: {auth.credits}</li>
          <li>
            <a href="/api/logout">Logout</a>
          </li>
        </div>
      );
    }
    return (
      <li>
        <a href="/auth/google">Login With Google</a>
      </li>
    );
  }

  render() {
    return (
      <nav>
        <div className="nav-wrapper">
          <Link
            to={this.props.user ? "/surveys" : "/"}
            className="left brand-logo"
          >
            Emaily
          </Link>
          <ul className="right">{this.renderContent()}</ul>
        </div>
      </nav>
    );
  }
}

const mapStateToProps = ({ auth }) => {
  return { auth };
};

export default connect(mapStateToProps)(Header);
