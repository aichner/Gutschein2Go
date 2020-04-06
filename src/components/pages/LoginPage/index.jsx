//> React
// Contains all the functionality necessary to define React components
import React from "react";
// Redirect from Router
import { Redirect, withRouter } from "react-router-dom";

//> Redux
// Connect
import { connect } from "react-redux";
// Actions
import { signIn } from "../../../store/actions/authActions";

//> MDB
// "Material Design for Bootstrap" is a great UI design framework
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBAlert,
  MDBInput,
  MDBBtn,
  MDBIcon
} from "mdbreact";

//> Components
// To be added

//> CSS
import "./loginpage.scss";

//> Images
import IMGlogo from "../../../assets/content/partners.jpg";

class LoginPage extends React.Component {
  state = {
    email: "",
    password: ""
  };

  componentDidMount = () => {
    
  };

  submitHandler = event => {
    event.preventDefault();

    this._loginUser();
  };

  changeHandler = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  _loginUser = () => {
    let email = this.state.email;
    let psw = this.state.password;

    if (email && psw) {
      this.props.signIn({
        email: email,
        password: psw
      });
    } else {
      this.setState({
        error: true
      });
    }
  };

  render() {
    const { authErrorDetails, auth, location } = this.props;

    let params = location.search.substr(1)
      ? location.search.substr(1).split("=")
      : null;
    if (params) {
      if (params[0] === "refer") {
        switch (params[1]) {
          case "me":
            if (auth.uid !== undefined) return <Redirect to="/me" />;
            break;
          default:
            if (auth.uid !== undefined) return <Redirect to="/manage" />;
        }
      }
    } else {
      if (auth.uid !== undefined) return <Redirect to="/manage" />;
    }

    return (
      <MDBContainer id="login" className="text-center text-white pt-5 mt-5">
        <img src={IMGlogo} alt="Gutschein2Go logo" className="img-fluid" />
        <form onSubmit={this.submitHandler}>
          <MDBRow className="flex-center">
            <MDBCol md="4">
              {authErrorDetails && (
                <MDBAlert color="danger" className="my-3">
                  <p>
                    Das Passwort ist falsch oder der Benutzer existiert nicht.
                  </p>
                </MDBAlert>
              )}
              <input
                value={this.state.email}
                onChange={this.changeHandler}
                type="email"
                placeholder="E-Mail"
                id="materialFormRegisterConfirmEx2"
                name="email"
                className="form-control my-3"
                label="Your email"
                required
              />
            </MDBCol>
            <MDBCol md="12"></MDBCol>
            <MDBCol md="4">
              <input
                value={this.state.password}
                onChange={this.changeHandler}
                type="password"
                id="materialFormRegisterConfirmEx4"
                className="form-control mb-3"
                placeholder="Passwort"
                name="password"
                label="Password"
                required
              />
            </MDBCol>
          </MDBRow>
          <MDBBtn color="orange" type="submit">
            <MDBIcon icon="angle-right" />
            Login
          </MDBBtn>
        </form>
      </MDBContainer>
    );
  }
}

const mapStateToProps = state => {
  return {
    authErrorDetails: state.auth.authErrorDetails,
    auth: state.firebase.auth
  };
};

const mapDispatchToProps = dispatch => {
  return {
    signIn: credentials => dispatch(signIn(credentials)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(LoginPage));

/**
 * SPDX-License-Identifier: (EUPL-1.2)
 * Copyright © 2019 Christian Aichner
 */
