//> React
// Contains all the functionality necessary to define React components
import React from "react";
// Router
import { withRouter } from "react-router-dom";

//> MDB
// "Material Design for Bootstrap" is a great UI design framework
import {
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavbarToggler,
  MDBCollapse,
  MDBNavItem,
  MDBNavLink,
  MDBContainer,
  MDBBtn,
  MDBIcon
} from "mdbreact";

//> Redux
// Connect
import { connect } from "react-redux";
// Actions
import { signOut } from "../../../store/actions/authActions";

//> CSS
import "./navbar.scss";

// React Logo
import logoImg from "../../../assets/content/h50.png";

class Navbar extends React.Component {
  state = {
    collapseID: ""
  };

  toggleCollapse = collapseID => () =>
    this.setState(prevState => ({
      collapseID: prevState.collapseID !== collapseID ? collapseID : ""
    }));

  closeCollapse = collapseID => () => {
    window.scrollTo(0, 0);
    this.state.collapseID === collapseID && this.setState({ collapseID: "" });
  };

  render() {
    const overlay = (
      <div
        id="sidenav-overlay"
        style={{ backgroundColor: "transparent" }}
        onClick={this.toggleCollapse("mainNavbarCollapse")}
      />
    );

    const { collapseID } = this.state;
    const { auth, profile, location } = this.props;

    if(location && location.pathname !== "/manage"){
      return (
        <div>
          <MDBNavbar color="white" light expand="md" fixed="top" scrolling>
            <MDBContainer>
              <MDBNavbarBrand href="/" className="py-0 font-weight-bold mr-0">
                <img
                  src={logoImg}
                  alt="Gutschien2Go Logo"
                  className="img-fluid"
                />
              </MDBNavbarBrand>
              {/*<MDBNavbarToggler
            onClick={this.toggleCollapse("mainNavbarCollapse")}
            />*/}
              <MDBCollapse
                id="mainNavbarCollapse"
                isOpen={this.state.collapseID}
                navbar
              >
                <MDBNavbarNav right className="flex-center">
                  <MDBNavItem>
                    <a href="mailto:join@gutschein2go.at" className="text-dark">
                      <strong>Kontakt</strong>
                    </a>
                  </MDBNavItem>
                  <MDBNavItem>
                    {auth.uid ? (
                      <>
                        {profile.admin ? (
                          <MDBNavLink
                            exact
                            to="manage"
                          >
                            <MDBBtn size="lg" color="orange">
                              Management
                            </MDBBtn>
                          </MDBNavLink>
                        ) : (
                          <MDBNavLink
                            exact
                            to="join"
                          >
                            <MDBBtn size="lg" color="orange">
                              Mein Status
                            </MDBBtn>
                          </MDBNavLink>
                        )}
                      </>
                    ) : (
                      <MDBNavLink
                        exact
                        to="join"
                      >
                        <MDBBtn size="lg" color="orange">
                          Join
                        </MDBBtn>
                      </MDBNavLink>
                    )}
                  </MDBNavItem>
                  {auth.uid && (
                    <MDBNavItem>
                      <MDBNavLink
                        exact
                        to=""
                        onClick={() => this.props.signOut()}
                      >
                        <MDBBtn size="lg" outline color="elegant">
                          Logout
                        </MDBBtn>
                      </MDBNavLink>
                    </MDBNavItem>
                  )}
                  {!auth.uid && (
                    <MDBNavItem>
                      <MDBNavLink
                        exact
                        to="login"
                      >
                        <MDBBtn size="lg" outline color="elegant">
                          Login
                        </MDBBtn>
                      </MDBNavLink>
                    </MDBNavItem>
                  )}
                </MDBNavbarNav>
              </MDBCollapse>
            </MDBContainer>
          </MDBNavbar>
          {collapseID && overlay}
        </div>
      );
    } else {
      return null;
    }
  }
}

const mapStateToProps = state => {
  return {
    auth: state.firebase.auth,
    profile: state.firebase.profile
  };
};

const mapDispatchToProps = dispatch => {
  return {
    signOut: () => dispatch(signOut())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Navbar));

/**
 * SPDX-License-Identifier: (EUPL-1.2)
 * Copyright © 2019 Werbeagentur Christian Aichner
 */
