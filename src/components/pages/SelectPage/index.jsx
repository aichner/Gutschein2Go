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
      <div id="selector">
        <MDBContainer className="text-center">
          <h2 className="font-weight-bold">Welcher Gutschein darf es sein?</h2>
          <hr />
          <h3 className="text-center">Sie wissen wo es hingehen soll?</h3>
          <p className="text-muted">
            Wählen Sie das gewünschte Bundesland aus, um alle Hotels,
            Restaurants und Betriebe in diesem anzuzeigen.
          </p>
          <div className="mapcontainer">
            <RegionPicker
              setRegion={this.setRegion}
              selected={this.state.region}
            />
          </div>
          <hr />
        </MDBContainer>
        <MDBContainer className="text-center" fluid>
          <h3 className="text-center">Sie wissen was Sie wollen?</h3>
          <p className="text-muted">Wählen Sie die gewünschte Kategorie aus.</p>
          <div className="split-selector">
            <MDBRow>
              <MDBCol lg="6">
                <MDBView>
                  <MDBMask className="flex-center" overlay="blue-light">
                    <div>
                      <h2 className="font-weight-bold mb-2">Hotels</h2>
                      <div className="stars amber-text mb-2">
                        <MDBIcon icon="star" size="sm" />
                        <MDBIcon icon="star" size="sm" />
                        <MDBIcon icon="star" size="sm" />
                        <MDBIcon icon="star" size="sm" />
                        <MDBIcon icon="star" size="sm" />
                      </div>
                      <p className="lead">
                        Ausgewählte Hotels in ganz Österreich
                      </p>
                    </div>
                  </MDBMask>
                </MDBView>
              </MDBCol>
              <MDBCol lg="6">
                <MDBView>
                  <MDBMask className="flex-center" overlay="pink-light">
                    <div>
                      <h2 className="font-weight-bold mb-2">
                        Restaurants & Mehr
                      </h2>
                      <p className="lead">Jetzt Vielfalt entdecken</p>
                    </div>
                  </MDBMask>
                </MDBView>
              </MDBCol>
            </MDBRow>
          </div>
        </MDBContainer>
      </div>
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
