//#region > Imports
//> React
// Contains all the functionality necessary to define React components
import React, { Component } from "react";

//> MDB
// "Material Design for Bootstrap" is a great UI design framework
import {
  MDBContainer,
  MDBCard,
  MDBCardHeader,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBProgress,
  MDBIcon,
  MDBCol,
} from "mdbreact";

//> Stylesheet
import "./toppickcard.scss";
//#endregion

//#region > Components
class TopPickCard extends Component {
  state = { business: null };

  componentDidMount() {
    this.setState({ business: this.props.business });
  }

  getStars(amount) {
    let faramount = 5 - amount;

    let result = [];

    for (let index = 0; index < amount; index++) {
      result = [...result, <MDBIcon icon="star" />];
    }
    for (let index = 0; index < faramount; index++) {
      result = [...result, <MDBIcon far icon="star" />];
    }

    return result;
  }

  render() {
    return (
      <MDBCol md="4" className="toppickcard">
        <MDBCard style={{ width: "22rem", marginTop: "1rem" }}>
          <MDBCardHeader className="cardheader">
            {this.state.business ? (
              <span>{this.state.business.name}</span>
            ) : (
              <MDBProgress material preloader className="placeholder" />
            )}
          </MDBCardHeader>
          <MDBCardBody>
            <MDBCardTitle>
              {this.state.business ? (
                <span>Fancy {this.state.business.name} Logo</span>
              ) : (
                <MDBProgress material preloader className="placeholder" />
              )}
            </MDBCardTitle>
            <MDBCardText>
              {this.state.business ? (
                <>
                  <span>{this.state.business.category}</span>
                  <span className="amber-text">
                    {this.getStars(this.state.business.rating)}
                  </span>
                </>
              ) : (
                <MDBProgress material preloader className="placeholder" />
              )}
            </MDBCardText>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
    );
  }
}

export default TopPickCard;
//#endregion

/**
 * SPDX-License-Identifier: (EUPL-1.2)
 * Copyright © 2020 Werbeagentur Christian Aichner
 */
