//#region > Imports
//> React
// Contains all the functionality necessary to define React components
import React, { Component } from "react";

//> MDB
// "Material Design for Bootstrap" is a great UI design framework
import {
  MDBRow,
  MDBContainer,
  MDBCarousel,
  MDBCarouselInner,
  MDBCarouselItem,
  MDBCarouselCaption,
  MDBView,
  MDBMask,
  MDBBtn,
  MDBIcon,
} from "mdbreact";

//> Stylesheet
import "./toppicks.scss";

//> Additional
import TopPickCard from "../../molecules/TopPickCard";
//#endregion

//#region > Data
const toppicks = [
  { name: "Toskana Ambassador", category: "Hotel", rating: 1 },
  { name: "Sunshine", category: "Hotel", rating: 5 },
  { name: "Crepetastic", category: "Café", rating: 4 },
  { name: "Kaffeemacher", category: "Café", rating: 5 },
];
//#endregion

//#region > Components
class TopPicks extends Component {
  state = {};
  render() {
    return (
      <div id="toppicks">
        <h1>Our top establishments:</h1>
        <MDBContainer>
          <MDBRow>
            {toppicks
              .sort((a, b) => (a.rating < b.rating ? 1 : -1))
              .map((business, i) => {
                return <TopPickCard business={business} key={i} />;
              })}
          </MDBRow>
        </MDBContainer>
      </div>
    );
  }
}
//#endregion

//#region > Exports
export default TopPicks;
//#endregion

/**
 * SPDX-License-Identifier: (EUPL-1.2)
 * Copyright © 2020 Werbeagentur Christian Aichner
 */
