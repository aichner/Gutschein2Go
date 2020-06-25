//#region > Imports
//> React
// Contains all the functionality necessary to define React components
import React from "react";
// Router
import { withRouter, Link, Redirect } from "react-router-dom";

//> MDB
// "Material Design for Bootstrap" is a great UI design framework
import { MDBContainer, MDBBtn, MDBAlert, MDBIcon } from "mdbreact";

//> Redux
// Connect
import { connect } from "react-redux";
// Actions
import { signInAnonymous } from "../../../store/actions/authActions";
import { checkName } from "../../../store/actions/shopActions";

//> CSS
import "./shoppage.scss";
//#endregion

//#region > Components
class ShopPage extends React.Component {
  state = {
    status: true,
  };

  componentDidMount = () => {
    const { match } = this.props;

    if (match.params.username) {
      // Parameter is given
      const name = match.params.username;
      this.props.checkName(name);
    }
  };

  render() {
    const { shopError, match } = this.props;

    console.log(shopError);

    if (shopError === false) {
      return (
        <MDBContainer id="message" className="py-5 my-5 text-center">
          <MDBIcon icon="clock" className="orange-text mb-3" size="3x" />
          <h2>Verifizierung ausstehend</h2>
          <p className="lead mb-5">
            Dieser Partner ist noch nicht verifiziert.
          </p>
          <Link to="../">
            <MDBBtn color="blue" size="lg">
              Zurück zur Startseite
            </MDBBtn>
          </Link>
        </MDBContainer>
      );
    } else if (shopError === true) {
      // Shop not found
      return (
        <MDBContainer id="message" className="py-5 my-5 text-center">
          <MDBIcon
            icon="exclamation-triangle"
            className="orange-text mb-3"
            size="3x"
          />
          <h2>
            Der Partner{" "}
            <strong className="orange-text">
              {match.params && match.params.username}
            </strong>{" "}
            existiert nicht.
            <MDBIcon icon="warning" className="danger-text ml-2" />
          </h2>
          <p className="lead mb-5">Haben Sie sich vertippt?</p>
          <Link to="../join">
            <MDBBtn color="blue" size="lg">
              Partner werden
            </MDBBtn>
          </Link>
        </MDBContainer>
      );
    } else {
      return (
        <MDBContainer className="text-center py-5 my-5">
          <div className="spinner-grow text-warning" role="status">
            <span className="sr-only">Loading...</span>
          </div>
        </MDBContainer>
      );
    }
  }
}
//#endregion

//#region > Functions
const mapStateToProps = (state) => {
  return {
    shopError: state.shop.shopError,
    auth: state.firebase.auth,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    signInAnonymous: () => dispatch(signInAnonymous()),
    checkName: (name) => dispatch(checkName(name)),
  };
};
//#endregion

//#region > Exports
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(ShopPage));
//#endregion

/**
 * SPDX-License-Identifier: (EUPL-1.2)
 * Copyright © 2020 Werbeagentur Christian Aichner
 */
