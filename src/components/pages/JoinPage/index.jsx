//> React
// Contains all the functionality necessary to define React components
import React from "react";

//> Additional
// Copy to clipboard
import copy from "copy-to-clipboard";

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
} from "mdbreact";

//> CSS
import "./joinpage.scss";

//> Images
import { ReactComponent as FinishImg } from "../../../assets/content/svg/finish.svg";

class JoinPage extends React.Component {
  state = {
    step: 0,
    company: "",
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    vat: "",
  };
  
  render() {
    return (
      <MDBContainer id="join" className="py-5 my-5 text-center">
      <MDBRow className="flex-center">
        <MDBCol md="8">
          <MDBCard>
            <MDBCardBody>
            {this.state.step === 0 &&
              <>
                <h2 className="h1 font-weight-bold mb-0">Partner werden</h2>
                <p className="lead mb-4">Erhalten Sie JETZT trotz geschlossenem Betrieb weiterhin Umsätze!</p>
                <p>
                Durch die <strong className="orange-text">Corona Krise</strong> haben viele Betriebe geschlossen und 
                verlieren daher ihren gesamten Umsatz. Wir bieten inviduelle Lösungen und ermöglichen den einfachen und 
                unkomplizierten Online-Verkauf von Gutscheinen zur Unterstützung von lokalen Betrieben.
                </p>
              </>
            }
            {this.state.step > 0 &&
            <>
            <MDBProgress color="orange-color" material value={(this.state.step+1)*100/4} height="20px">
            Schritt {this.state.step + 1} von 4
            </MDBProgress>
            <div className="text-left">
              <span className="clickable text-muted" onClick={() => this.setState({step: this.state.step - 1})}>
              <MDBIcon icon="angle-left" className="mr-2"/>
              Zurück
              </span>
            </div>
            </>
            }
              <div className="py-4">
              <form>
                <MDBRow className="flex-center">
                  {this.state.step === 0 &&
                  <>
                    <MDBCol md="6">
                      <input 
                      type="text"
                      name="company"
                      className="form-control"
                      placeholder="Firmenname"
                      onChange={(e) => this.setState({[e.target.name]: e.target.value})}
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
                      onChange={(e) => this.setState({[e.target.name]: e.target.value})}
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
                      onChange={(e) => this.setState({[e.target.name]: e.target.value})}
                      value={this.state.lastname}
                      required
                      />
                    </MDBCol>
                    <MDBCol md="12" className="mt-2">
                      <MDBBtn 
                      color="orange"
                      size="lg"
                      type="submit"
                      disabled={(
                        this.state.company === "" ||
                        this.state.firstname === "" ||
                        this.state.lastname === ""
                      )}
                      onClick={() => {
                        if(this.state.company !== "" || this.state.firstname !== "" || this.state.lastname !== "") {
                          this.setState({step: 1})
                        }
                      }}
                      >
                        Weiter
                      </MDBBtn>
                    </MDBCol>
                  </>
                  }
                  {this.state.step === 1 &&
                  <>
                    <MDBCol md="12">
                      <p className="lead mb-3">Wie können wir Sie erreichen?</p>
                    </MDBCol>
                    <MDBCol md="6">
                      <input 
                      type="text"
                      name="email"
                      className="form-control"
                      placeholder="E-Mail"
                      onChange={(e) => this.setState({[e.target.name]: e.target.value})}
                      value={this.state.email}
                      required
                      />
                    </MDBCol>
                    <MDBCol md="6">
                      <input
                      type="text"
                      name="phone"
                      className="form-control" 
                      placeholder="Telefon (Optional)"
                      onChange={(e) => this.setState({[e.target.name]: e.target.value})}
                      value={this.state.phone}
                      />
                    </MDBCol>
                    <MDBCol md="12" className="mt-2">
                      <MDBBtn 
                      color="orange"
                      size="lg"
                      type="submit"
                      disabled={this.state.email === ""}
                      onClick={() => {
                        if(this.state.email !== "") {
                          this.setState({step: 2})
                        }
                      }}
                      >
                        Weiter
                      </MDBBtn>
                    </MDBCol>
                  </>
                  }
                  {this.state.step === 2 &&
                  <>
                    <MDBCol md="12">
                      <p className="lead">Betrieb Standort</p>
                      <small className="mb-3">
                      Wir benötigen diese Information, um Sie zu verifizieren und bei Bedarf das Gutschein2Go 
                      Gutscheinplakat mit Ihrem individuellen Link an Ihrem Betrieb für Sie kostenlos anzubringen.
                      </small>
                    </MDBCol>
                    <MDBCol md="5">
                      <input 
                      type="text"
                      name="address"
                      className="form-control"
                      placeholder="Adresse"
                      onChange={(e) => this.setState({[e.target.name]: e.target.value})}
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
                      onChange={(e) => this.setState({[e.target.name]: e.target.value})}
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
                      onChange={(e) => this.setState({[e.target.name]: e.target.value})}
                      value={this.state.state}
                      required
                      />
                    </MDBCol>
                    <MDBCol md="12">
                      <p className="lead my-3">Zusätzliche Informationen</p>
                    </MDBCol>
                    <MDBCol md="4">
                      <input 
                      type="text"
                      name="vat"
                      className="form-control"
                      placeholder="UID-Nummer (optional)"
                      onChange={(e) => this.setState({[e.target.name]: e.target.value})}
                      value={this.state.vat}
                      />
                    </MDBCol>
                    <MDBCol md="12" className="mt-2">
                      <MDBBtn 
                      color="orange"
                      size="lg"
                      type="submit"
                      disabled={(
                        this.state.address === "" ||
                        this.state.city === "" ||
                        this.state.state === ""
                      )}
                      onClick={() => {
                        if(this.state.address !== "" || this.state.city !== "" || this.state.state !== "") {
                          this.setState({step: 3})
                        }
                      }}
                      >
                        Absenden
                      </MDBBtn>
                    </MDBCol>
                  </>
                  }
                </MDBRow>
                {this.state.step === 3 &&
                  <>
                    <FinishImg />
                    <h2>Erfolgreich abgesendet!</h2>
                    <p className="lead">
                    Ihr Antrag wurde an uns übermittelt. Wir setzen uns mit Ihnen schnellstmöglich in Verbindung.
                    </p>
                    <MDBAlert color="warning" className="py-3 mt-4">
                      <p>Wir bitten Sie, zwecks Verifizierung Ihren Gewerbeschein und eine Kopie eines Ausweises 
                      (Führerschein, Personalausweis, Reisepass, ...) an <a href="mailto:validation@gutschein2go.at">
                      validation@gutschein2go.at
                      </a> zu senden um einen reibungslosen Ablauf zu gewährleisten.</p>
                    </MDBAlert>
                    {!this.state.copied ? (
                      <MDBBtn 
                      color={"orange"}
                      size="lg"
                      onClick={() => {
                        this.setState({copied: true}, () => copy("https://gutschein2go.at/?refer=recommend"))
                      }}
                      >
                        <MDBIcon far icon="copy" />
                        Weiterempfehlen
                      </MDBBtn>
                    ) : (
                      <MDBBtn 
                      color="success"
                      size="lg"
                      disabled
                      >
                        <MDBIcon icon="check" />
                        Link kopiert
                      </MDBBtn>
                    )}
                  </>
                }
              </form>
              </div>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
      </MDBContainer>
    );
  }
}

export default JoinPage;

/**
 * SPDX-License-Identifier: (EUPL-1.2)
 * Copyright © 2019 Werbeagentur Christian Aichner
 */
