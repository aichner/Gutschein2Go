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
    MDBIcon,
} from "mdbreact";

//> CSS
import "./navbar.scss";

// React Logo
import logoImg from "../../../assets/content/h50.png";

class Navbar extends React.Component{
  state = {
      collapseID: "",
      pathBack: "",
      pathLoaded: false,
  };

  toggleCollapse = (collapseID) => () =>
      this.setState((prevState) => ({
      collapseID: prevState.collapseID !== collapseID ? collapseID : ""
      }));

  closeCollapse = (collapseID) => () => {
      window.scrollTo(0, 0);
      this.state.collapseID === collapseID && this.setState({ collapseID: "" });
  };

  componentDidMount = () => {
    if(this.props.location){
      let i = 1;
      let pathBack = "";
      // Check the number of slashes to fix relative links
      while(i < (this.props.location.pathname.split("/").length - 1)){
        pathBack += "../";
        i++;
      }
      this.setState({
        pathBack,
      });
    }
  }

  render(){
    const { location } = this.props;

    const overlay = (
    <div
        id="sidenav-overlay"
        style={{ backgroundColor: "transparent" }}
        onClick={this.toggleCollapse("mainNavbarCollapse")}
    />
    );

    const { collapseID } = this.state;
    return(
      <div>
        <MDBNavbar color="white" light expand="md" fixed="top" scrolling>
        <MDBContainer>
          <MDBNavbarBrand href="/" className="py-0 font-weight-bold mr-0">
          <img src={logoImg} alt="Gutschien2Go Logo" className="img-fluid"/>
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
              <MDBNavLink
                exact
                to={this.state.pathBack+"join"}
                onClick={this.closeCollapse("mainNavbarCollapse")}
              >
                <MDBBtn size="lg" color="orange">Join</MDBBtn>
              </MDBNavLink>
            </MDBNavItem>
          </MDBNavbarNav>
          </MDBCollapse>
        </MDBContainer>
      </MDBNavbar>
      {collapseID && overlay}
      </div>
    );
  }
}

export default withRouter(Navbar);

/** 
 * SPDX-License-Identifier: (EUPL-1.2)
 * Copyright © 2019 Werbeagentur Christian Aichner
 */
