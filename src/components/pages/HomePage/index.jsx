//#region > Imports
//> React
// Contains all the functionality necessary to define React components
import React from "react";
// React Router
import { Link, withRouter } from "react-router-dom";

//> Additional
import { Hero, ImageSlider, TopPicks } from "../../organisms";
import { MDBBtn } from "mdbreact";
//#endregion

//#region > Components
class HomePage extends React.Component {
  render() {
    return (
      <>
        <Hero />
        <ImageSlider />
        <TopPicks />
        <div>
          <MDBBtn></MDBBtn>
        </div>
      </>
    );
  }
}
//#endregion

//#region > Exports
export default withRouter(HomePage);
//#endregion

/**
 * SPDX-License-Identifier: (EUPL-1.2)
 * Copyright © 2020 Werbeagentur Christian Aichner
 */
