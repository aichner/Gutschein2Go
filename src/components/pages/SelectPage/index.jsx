//#region > Imports
//> React
// Contains all the functionality necessary to define React components
import React from "react";
// React Router
import { Link, withRouter } from "react-router-dom";

//> MDB
// "Material Design for Bootstrap" is a great UI design framework
import {
  MDBContainer,
  MDBCol,
  MDBRow,
  MDBCardBody,
  MDBIcon,
  MDBCard,
  MDBView,
  MDBMask,
  MDBBtn,
  MDBSmoothScroll,
} from "mdbreact";

//> Region Picker Map
import { RegionPicker } from "../../atoms";

//> SCSS
import "./selectpage.scss";
//#endregion

//#region > Components
class SelectPage extends React.Component {
  state = {
    region: undefined,
  };

  setRegion = (region) => {
    this.setState({ region });
  };

  render() {
    return (
      <MDBContainer id="selector">
        <div className="mapcontainer">
          <RegionPicker setRegion={this.setRegion} />
        </div>
        <div className="companytypeselector"></div>
      </MDBContainer>
    );
  }
}
//#endregion

//#region > Exports
export default withRouter(SelectPage);
//#endregion

/**
 * SPDX-License-Identifier: (EUPL-1.2)
 * Copyright © 2020 Werbeagentur Christian Aichner
 */
