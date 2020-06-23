//#region > Imports
//> React
// Contains all the functionality necessary to define React components
import React from "react";
// Link
import { Link } from "react-router-dom";

//> Additional
// Copy to clipboard
import copy from "copy-to-clipboard";
// Axios
import axios from "axios";

//> MDB
// "Material Design for Bootstrap" is a great UI design framework
import {
  MDBContainer,
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBAlert,
  MDBIcon,
  MDBRow,
  MDBCol,
  MDBProgress,
  MDBSpinner,
  MDBAnimation,
  MDBInput,
} from "mdbreact";

//> Redux
// Connect
import { connect } from "react-redux";
// Actions
import {
  signUp,
  signOut,
  checkEmail,
} from "../../../store/actions/authActions";

//> CSS
import "./joinpage.scss";

//> Images
import { ReactComponent as FinishImg } from "../../../assets/content/svg/finish.svg";
//#endregion

//#region > Components
class JoinPage extends React.Component {
  state = {
    step: 0,
    company: "",
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
    address: "",
    password: "",
    password1: "",
    city: "",
    state: "",
    vat: "",
    privacy: false,
    agb: false,
  };

  checkEmail = async (e) => {
    e.preventDefault();

    let rtn = await this.props.checkEmail(this.state.email.trim());

    // If the email does not yet exist
    if (!rtn) {
      this.setState({ step: 2, emailError: false });
    } else {
      this.setState({ emailError: true });
    }
  };

  checkPassword = (e) => {
    e.preventDefault();

    // Check if passwords match
    if (this.state.password === this.state.password1) {
      this.setState({ passwordError: false, step: 3 });
    } else {
      this.setState({ passwordError: true, step: 2 });
    }
  };

  initSendMail = () => {
    // Login to get JWT
    axios
      .post("https://gutschein2gogridmail.herokuapp.com/login", {
        username: process.env.REACT_APP_NODE_USER,
        password: process.env.REACT_APP_NODE_PASS,
      })
      .then(
        (response) => {
          if (response.status === 200) {
            this.sendMail(response.data.token);
          } else {
            console.log("Could not send mail.");
          }
        },
        (error) => {
          console.log("Could not send mail.");
        }
      );
  };

  sendMail = (token) => {
    if (!token) {
      this.initSendMail();
    } else {
      const config = {
        method: "POST",
        url: "https://gutschein2gogridmail.herokuapp.com/sendmail",
        headers: {
          Authorization: "bearer " + token,
          "Content-Type": "application/json",
        },
        data: JSON.stringify({
          to: this.state.email ? this.state.email : null,
          templateData: {
            name: this.state.firstname ? this.state.firstname : "Partner",
          },
          templateId: "d-1f01d3590e1a490ebb8846d40f40c3c7",
        }),
      };

      axios(config)
        .then((response) => {
          if (response.status === 200) {
          } else if (response.status === 401 || response.status === 403) {
            // Perform login - not authorized
            this.loginNode();
          } else {
            console.log("Could not send mail.", response.status);
          }
        })
        .catch((error) => {
          console.log("Could not send mail.");
        });
    }
  };

  render() {
    const { authError, auth, profile } = this.props;

    console.log(authError, auth, profile);

    return (
      <MDBContainer id="join" className="py-5 my-5 text-center">
        <MDBRow className="flex-center">
          <MDBCol md="8">
            <MDBCard className="mt-5">
              <MDBCardBody>
                {auth.uid ? (
                  <>
                    {profile.isLoaded ? (
                      <>
                        {profile.isEmpty ? (
                          <>
                            <MDBIcon
                              icon="times"
                              className="text-danger"
                              size="3x"
                            />
                            <p className="font-weight-bold lead mb-3">
                              User Daten können nicht geladen werden.
                            </p>
                            <MDBBtn
                              color="elegant"
                              onClick={() => this.props.signOut()}
                            >
                              Ausloggen
                            </MDBBtn>
                          </>
                        ) : (
                          <>
                            <FinishImg />
                            <h2 className="h1 font-weight-bold mb-0">
                              Willkommen, {profile.first_name}!
                            </h2>
                            <p className="lead mb-0">
                              Hier findest Du den aktuellen Stand Deines
                              Gutschein-Shops.
                            </p>
                            <p className="mb-4">
                              Dieser Status wird{" "}
                              <MDBAnimation
                                type="pulse"
                                infinite
                                className="red-text d-inline-block font-weight-bold"
                              >
                                live
                              </MDBAnimation>{" "}
                              aktualisiert.
                            </p>
                            <div className="py-2">
                              {profile.verified === false &&
                                !profile.shop.active && (
                                  <MDBAlert color="warning">
                                    <p>
                                      <MDBIcon
                                        icon="id-card"
                                        className="orange-text"
                                        size="2x"
                                      />
                                    </p>
                                    <p className="lead mb-0 font-weight-bold">
                                      Verifizierung ausstehend
                                    </p>
                                    <p>
                                      Die Verifzierung wird soeben durchgeführt.
                                      Das kann bis zu 24 Stunden dauern.
                                    </p>
                                  </MDBAlert>
                                )}
                              {profile.verified === true &&
                                !profile.shop.active && (
                                  <MDBAlert color="success">
                                    <p>
                                      <MDBIcon icon="award" size="2x" />
                                    </p>
                                    <p className="lead mb-0 font-weight-bold">
                                      Verifizierung abgeschlossen
                                    </p>
                                    <p>Sie wurden erfolgreich verifiziert</p>
                                  </MDBAlert>
                                )}
                              {profile.verified === true &&
                                !profile.shop.active && (
                                  <MDBAlert color="info">
                                    <p>
                                      <MDBIcon icon="ticket-alt" size="2x" />
                                    </p>
                                    <p className="lead mb-0 font-weight-bold">
                                      Gutscheine festlegen
                                    </p>
                                    <p>
                                      Unsere MitarbeiterInnen werden sich
                                      diesbezüglich schnellstmögich bei Ihnen
                                      melden.
                                    </p>
                                  </MDBAlert>
                                )}
                              {profile.verified === true &&
                                profile.shop.active && (
                                  <>
                                    <MDBAlert color="success">
                                      <p>
                                        <MDBIcon
                                          icon="check-circle"
                                          size="2x"
                                        />
                                      </p>
                                      <p className="lead mb-0 font-weight-bold">
                                        Alles bereit!
                                      </p>
                                      <p>Ihr Gutscheinshop steht bereit.</p>
                                    </MDBAlert>
                                    <div className="py-3">
                                      <p className="lead">
                                        Ihr Shop steht unter
                                      </p>
                                      <h3 className="font-weight-bold orange-text">
                                        <a
                                          href={`https://g2g.at/${profile.shop.name}`}
                                          target="_blank"
                                        >
                                          www.g2g.at/{profile.shop.name}
                                        </a>
                                      </h3>
                                      <p className="lead">bereit!</p>
                                    </div>
                                    {!this.state.copied2 ? (
                                      <MDBBtn
                                        color={"orange"}
                                        onClick={() => {
                                          this.setState({ copied2: true }, () =>
                                            copy(
                                              `https://g2g.at/${profile.shop.name}`
                                            )
                                          );
                                        }}
                                      >
                                        <MDBIcon icon="copy" />
                                        Shop Link kopieren
                                      </MDBBtn>
                                    ) : (
                                      <MDBBtn color="success" disabled>
                                        <MDBIcon icon="check" />
                                        Link kopiert
                                      </MDBBtn>
                                    )}
                                    {!this.state.copied1 ? (
                                      <MDBBtn
                                        color={"orange"}
                                        outline
                                        onClick={() => {
                                          this.setState({ copied1: true }, () =>
                                            copy(
                                              "https://gutschein2go.at/?refer=recommend"
                                            )
                                          );
                                        }}
                                      >
                                        <MDBIcon far icon="copy" />
                                        Weiterempfehlen
                                      </MDBBtn>
                                    ) : (
                                      <MDBBtn color="success" outline disabled>
                                        <MDBIcon icon="check" />
                                        Link kopiert
                                      </MDBBtn>
                                    )}
                                  </>
                                )}
                              <div>
                                <MDBBtn
                                  color="primary"
                                  outline
                                  onClick={() => this.props.signOut()}
                                >
                                  <MDBIcon icon="buildling" />
                                  Weiteren Betrieb registrieren
                                </MDBBtn>
                                <p>
                                  <p className="lead mt-3">Support</p>
                                  <a href="mailto:info@gutschein2go.at">
                                    <MDBBtn color="primary">
                                      <MDBIcon icon="envelope" />
                                      E-Mail Support
                                    </MDBBtn>
                                  </a>
                                </p>
                                <p>
                                  oder von 10:00 bis 18:00
                                  <br />
                                  +43 660 575 21 12
                                </p>
                              </div>
                            </div>
                          </>
                        )}
                      </>
                    ) : (
                      <>
                        <MDBSpinner yellow />
                      </>
                    )}
                  </>
                ) : (
                  <>
                    {this.state.step === 0 && (
                      <>
                        <h2 className="h1 font-weight-bold mb-0">
                          Partner werden
                        </h2>
                        <p className="lead mb-4">
                          Erhalten Sie JETZT trotz geschlossenem Betrieb
                          weiterhin Umsätze!
                        </p>
                        <p>
                          Durch die{" "}
                          <strong className="orange-text">Corona Krise</strong>{" "}
                          haben viele Betriebe geschlossen und verlieren daher
                          ihren gesamten Umsatz. Wir bieten individuelle
                          Lösungen und ermöglichen den einfachen und
                          unkomplizierten Online-Verkauf von Gutscheinen zur
                          Unterstützung von lokalen Betrieben.
                        </p>
                      </>
                    )}
                    {this.state.step > 0 && this.state.step < 4 && (
                      <>
                        <MDBProgress
                          color="orange-color"
                          material
                          value={((this.state.step + 1) * 100) / 4}
                          height="20px"
                        >
                          Schritt {this.state.step + 1} von 4
                        </MDBProgress>
                        {this.state.step < 4 && (
                          <div className="text-left">
                            <span
                              className="clickable text-muted"
                              onClick={() =>
                                this.setState({ step: this.state.step - 1 })
                              }
                            >
                              <MDBIcon icon="angle-left" className="mr-2" />
                              Zurück
                            </span>
                          </div>
                        )}
                      </>
                    )}
                    <div className="py-4">
                      <form>
                        <MDBRow className="flex-center">
                          {this.state.step === 0 && (
                            <>
                              <MDBCol md="6">
                                <input
                                  type="text"
                                  name="company"
                                  className="form-control"
                                  placeholder="Firmenname"
                                  onChange={(e) =>
                                    this.setState({
                                      [e.target.name]: e.target.value,
                                    })
                                  }
                                  value={this.state.company}
                                  required
                                />
                              </MDBCol>
                              <MDBCol md="3">
                                <input
                                  type="text"
                                  name="firstname"
                                  className="form-control"
                                  placeholder="Vorname"
                                  onChange={(e) =>
                                    this.setState({
                                      [e.target.name]: e.target.value,
                                    })
                                  }
                                  value={this.state.firstname}
                                  required
                                />
                              </MDBCol>
                              <MDBCol md="3">
                                <input
                                  type="text"
                                  name="lastname"
                                  className="form-control"
                                  placeholder="Nachname"
                                  onChange={(e) =>
                                    this.setState({
                                      [e.target.name]: e.target.value,
                                    })
                                  }
                                  value={this.state.lastname}
                                  required
                                />
                              </MDBCol>
                              <MDBCol md="12" className="mt-2">
                                <MDBBtn
                                  color="orange"
                                  size="lg"
                                  type="submit"
                                  disabled={
                                    this.state.company === "" ||
                                    this.state.firstname === "" ||
                                    this.state.lastname === ""
                                  }
                                  onClick={() => {
                                    if (
                                      this.state.company !== "" ||
                                      this.state.firstname !== "" ||
                                      this.state.lastname !== ""
                                    ) {
                                      this.setState({ step: 1 });
                                    }
                                  }}
                                >
                                  Weiter
                                </MDBBtn>
                              </MDBCol>
                              <div className="w-100">
                                <div className="splitter my-4">
                                  <span className="or">
                                    <span className="or-text lead">oder</span>
                                  </span>
                                </div>
                              </div>
                              <a href="mailto:join@gutschein2go.at">
                                <MDBBtn color="primary">
                                  <MDBIcon icon="envelope" />
                                  E-Mail senden
                                </MDBBtn>
                              </a>
                              <MDBBtn
                                color="primary"
                                onClick={() => this.setState({ call: true })}
                                disabled={this.state.call}
                              >
                                <MDBIcon icon="phone" />
                                Anrufen
                              </MDBBtn>
                              {this.state.call && (
                                <MDBAlert color="info" className="mt-3">
                                  <strong>
                                    Sie können uns täglich von 10:00 bis 18:00
                                    telefonisch unter{" "}
                                    <strong>+43 660 575 21 12</strong>{" "}
                                    erreichen.
                                  </strong>
                                  <a
                                    href="https://termin.gutschein2go.at"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                  >
                                    <MDBBtn color="info">
                                      <MDBIcon icon="calendar" />
                                      Termin vereinbaren
                                    </MDBBtn>
                                  </a>
                                </MDBAlert>
                              )}
                            </>
                          )}
                          {this.state.step === 1 && (
                            <>
                              <MDBCol md="12">
                                <p className="lead mb-3">
                                  Wie können wir Sie erreichen?
                                </p>
                              </MDBCol>
                              <MDBCol md="6">
                                <input
                                  type="text"
                                  name="email"
                                  className={
                                    this.state.emailError
                                      ? "form-control error mb-0"
                                      : "form-control"
                                  }
                                  placeholder="E-Mail"
                                  onChange={(e) =>
                                    this.setState({
                                      [e.target.name]: e.target.value,
                                    })
                                  }
                                  value={this.state.email}
                                  required
                                />
                                {this.state.emailError && (
                                  <div className="text-left">
                                    <small className="text-danger">
                                      Diese E-Mail ist bereits registriert.
                                    </small>
                                  </div>
                                )}
                              </MDBCol>
                              <MDBCol md="6">
                                <input
                                  type="text"
                                  name="phone"
                                  className="form-control"
                                  placeholder="Telefon (Optional)"
                                  onChange={(e) =>
                                    this.setState({
                                      [e.target.name]: e.target.value,
                                    })
                                  }
                                  value={this.state.phone}
                                />
                              </MDBCol>
                              <MDBCol md="12" className="mt-2">
                                <MDBBtn
                                  color="orange"
                                  size="lg"
                                  type="submit"
                                  disabled={this.state.email === ""}
                                  onClick={this.checkEmail}
                                >
                                  Weiter
                                </MDBBtn>
                              </MDBCol>
                            </>
                          )}
                          {this.state.step === 2 && (
                            <>
                              <MDBCol md="12">
                                <p className="lead mb-0">
                                  Wählen Sie ein Kennwort
                                </p>
                                <p className="mb-3 text-muted">
                                  So können Sie den Status Ihres Shops jederzeit
                                  abrufen.
                                </p>
                              </MDBCol>
                              <MDBCol md="6">
                                <input
                                  type="password"
                                  name="password"
                                  className="form-control"
                                  placeholder="Passwort"
                                  onChange={(e) =>
                                    this.setState({
                                      [e.target.name]: e.target.value,
                                    })
                                  }
                                  value={this.state.password}
                                  required
                                />
                              </MDBCol>
                              <MDBCol md="6">
                                <input
                                  type="password"
                                  name="password1"
                                  className={
                                    this.state.passwordError
                                      ? "form-control error mb-0"
                                      : "form-control"
                                  }
                                  placeholder="Passwort wiederholen"
                                  onChange={(e) =>
                                    this.setState({
                                      [e.target.name]: e.target.value,
                                    })
                                  }
                                  value={this.state.password1}
                                  required
                                />
                                {this.state.passwordError && (
                                  <div className="text-left">
                                    <small className="text-danger">
                                      Die beiden Passwörter stimmen nicht
                                      überein.
                                    </small>
                                  </div>
                                )}
                              </MDBCol>
                              <MDBCol md="12" className="mt-2">
                                <MDBBtn
                                  color="orange"
                                  size="lg"
                                  outline
                                  type="submit"
                                  onClick={() => {
                                    this.setState({
                                      password: undefined,
                                      step: 3,
                                    });
                                  }}
                                >
                                  Überspringen
                                </MDBBtn>
                                <MDBBtn
                                  color="orange"
                                  size="lg"
                                  type="submit"
                                  disabled={
                                    this.state.password === "" ||
                                    this.state.password1 === ""
                                  }
                                  onClick={this.checkPassword}
                                >
                                  Weiter
                                </MDBBtn>
                              </MDBCol>
                            </>
                          )}
                          {this.state.step === 3 && (
                            <>
                              <MDBCol md="12">
                                <p className="lead">Betrieb Standort</p>
                                <small className="mb-3">
                                  Wir benötigen diese Information, um Sie zu
                                  verifizieren und bei Bedarf das Gutschein2Go
                                  Gutscheinplakat mit Ihrem individuellen Link
                                  an Ihrem Betrieb für Sie kostenlos
                                  anzubringen.
                                </small>
                              </MDBCol>
                              <MDBCol md="5">
                                <input
                                  type="text"
                                  name="address"
                                  className="form-control"
                                  placeholder="Adresse"
                                  onChange={(e) =>
                                    this.setState({
                                      [e.target.name]: e.target.value,
                                    })
                                  }
                                  value={this.state.address}
                                  required
                                />
                              </MDBCol>
                              <MDBCol md="4">
                                <input
                                  type="text"
                                  name="city"
                                  className="form-control"
                                  placeholder="Stadt"
                                  onChange={(e) =>
                                    this.setState({
                                      [e.target.name]: e.target.value,
                                    })
                                  }
                                  value={this.state.city}
                                  required
                                />
                              </MDBCol>
                              <MDBCol md="3">
                                <input
                                  type="text"
                                  name="state"
                                  className="form-control"
                                  placeholder="Bundesland"
                                  onChange={(e) =>
                                    this.setState({
                                      [e.target.name]: e.target.value,
                                    })
                                  }
                                  value={this.state.state}
                                  required
                                />
                              </MDBCol>
                              <MDBCol md="12">
                                <p className="lead my-3">
                                  Zusätzliche Informationen
                                </p>
                              </MDBCol>
                              <MDBCol md="4">
                                <input
                                  type="text"
                                  name="vat"
                                  className="form-control"
                                  placeholder="UID-Nummer (optional)"
                                  onChange={(e) =>
                                    this.setState({
                                      [e.target.name]: e.target.value,
                                    })
                                  }
                                  value={this.state.vat}
                                />
                              </MDBCol>
                              <div className="mt-1">
                                <MDBInput
                                  label={
                                    <p>
                                      Ich habe die{" "}
                                      <Link to="../privacy" target="_blank">
                                        Datenschutzerklärung
                                      </Link>{" "}
                                      gelesen und akzeptiert.
                                    </p>
                                  }
                                  filled
                                  type="checkbox"
                                  checked={this.state.privacy}
                                  onChange={(e) => {
                                    this.setState({
                                      privacy: e.target.checked,
                                    });
                                  }}
                                  id="checkbox1"
                                  containerClass="mr-5"
                                />
                              </div>
                              <div className="my-2">
                                <MDBInput
                                  label={
                                    <p>
                                      Ich habe die{" "}
                                      <Link to="../agb" target="_blank">
                                        AGB
                                      </Link>{" "}
                                      gelesen und akzeptiert.
                                    </p>
                                  }
                                  filled
                                  type="checkbox"
                                  id="checkbox2"
                                  checked={this.state.agb}
                                  onChange={(e) => {
                                    this.setState({
                                      agb: e.target.checked,
                                    });
                                  }}
                                  containerClass="mr-5"
                                />
                              </div>
                              <MDBCol md="12" className="mt-2">
                                <MDBBtn
                                  color="orange"
                                  size="lg"
                                  type="submit"
                                  disabled={
                                    this.state.address === "" ||
                                    this.state.city === "" ||
                                    this.state.state === "" ||
                                    !this.state.privacy ||
                                    !this.state.agb
                                  }
                                  onClick={(e) => {
                                    e.preventDefault();
                                    if (
                                      this.state.address !== "" ||
                                      this.state.city !== "" ||
                                      this.state.state !== "" ||
                                      !this.state.privacy ||
                                      !this.state.agb
                                    ) {
                                      let newUser = {
                                        first_name: this.state.firstname,
                                        last_name: this.state.lastname,
                                        email: this.state.email,
                                        phone: this.state.phone
                                          ? this.state.phone
                                          : null,
                                        company: {
                                          location: {
                                            address: this.state.address,
                                            city: this.state.city,
                                            state: this.state.state,
                                          },
                                          uid: this.state.vat
                                            ? this.state.vat
                                            : null,
                                          name: this.state.company,
                                        },
                                        password: this.state.password,
                                      };
                                      this.setState({ step: 4 }, () => {
                                        this.props.signUp(newUser);
                                        this.sendMail();
                                      });
                                    }
                                  }}
                                >
                                  Absenden
                                </MDBBtn>
                              </MDBCol>
                            </>
                          )}
                        </MDBRow>
                        {this.state.step === 4 && (
                          <>
                            {authError ? (
                              <MDBAlert color="danger">
                                <p>{authError}</p>
                                <MDBBtn
                                  color="danger"
                                  onClick={() => this.setState({ step: 1 })}
                                >
                                  <MDBIcon icon="angle-left" />
                                  Zurück
                                </MDBBtn>
                              </MDBAlert>
                            ) : (
                              <>
                                <MDBSpinner yellow />
                              </>
                            )}
                          </>
                        )}
                      </form>
                    </div>
                  </>
                )}
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    );
  }
}
//#endregion

//#region > Functions
const mapStateToProps = (state) => {
  return {
    authError: state.auth.authError,
    authErrorCode: state.auth.authErrorCode,
    authErrorDetails: state.auth.authErrorDetails,
    auth: state.firebase.auth,
    profile: state.firebase.profile,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    signUp: (newUser) => dispatch(signUp(newUser)),
    signOut: () => dispatch(signOut()),
    checkEmail: (email) => dispatch(checkEmail(email)),
  };
};
//#endregion

//#region > Exports
export default connect(mapStateToProps, mapDispatchToProps)(JoinPage);
//#endregion

/**
 * SPDX-License-Identifier: (EUPL-1.2)
 * Copyright © 2020 Werbeagentur Christian Aichner
 */
