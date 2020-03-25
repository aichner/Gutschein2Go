//> React
// Contains all the functionality necessary to define React components
import React from "react";

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
} from "mdbreact";

//> CSS
import "./joinpage.scss";

class JoinPage extends React.Component {
  render() {
    return (
      <MDBContainer id="join" className="py-5 my-5 text-center">
      <MDBRow className="flex-center">
        <MDBCol md="8">
          <MDBCard>
            <MDBCardBody>
              <h2 className="h1 font-weight-bold mb-0">Partner werden</h2>
              <p className="lead mb-4">Erhalten Sie JETZT trotz geschlossenem Betrieb weiterhin Umsätze!</p>
              <p>
              Durch die <strong className="orange-text">Corona Krise</strong> haben viele Betriebe geschlossen und 
              verlieren daher ihren gesamten Umsatz. Wir bieten inviduelle Lösungen und ermöglichen den einfachen und 
              unkomplizierten Online-Verkauf von Gutscheinen zur Unterstützung von lokalen Betrieben.
              </p>
              <div className="py-4">
              <form>
                <MDBRow className="flex-center">
                  <MDBCol md="6">
                    <input 
                    type="text"
                    name="company"
                    className="form-control"
                    placeholder="Betrieb Name"
                    required
                    />
                  </MDBCol>
                  <MDBCol md="6">
                    <input
                    type="text"
                    name="fullname"
                    className="form-control" 
                    placeholder="Vollständiger Name"
                    required
                    />
                  </MDBCol>
                  <MDBCol md="12">
                    <p className="lead my-3">Wie können wir Sie erreichen?</p>
                  </MDBCol>
                  <MDBCol md="6">
                    <input 
                    type="text"
                    name="email"
                    className="form-control"
                    placeholder="E-Mail"
                    required
                    />
                  </MDBCol>
                  <MDBCol md="6">
                    <input
                    type="text"
                    name="phone"
                    className="form-control" 
                    placeholder="Telefon (Optional)"
                    />
                  </MDBCol>
                  <MDBCol md="12">
                    <p className="lead mt-3">Betrieb Standort</p>
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
                    required
                    />
                  </MDBCol>
                  <MDBCol md="4">
                    <input
                    type="text"
                    name="city"
                    className="form-control" 
                    placeholder="Stadt"
                    required
                    />
                  </MDBCol>
                  <MDBCol md="3">
                    <input 
                    type="text"
                    name="state"
                    className="form-control"
                    placeholder="Bundesland"
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
                    />
                  </MDBCol>
                </MDBRow>
                <div className="py-3">
                  <p>Wir bitten Sie, zwecks Validierung Ihren Gewerbeschein und eine Kopie eines Ausweises (Führerschein, 
                  Personalausweis, Reisepass, ...) an <a href="mailto:validation@gutschein2go.at">
                  validation@gutschein2go.at
                  </a> zu senden um einen reibungslosen Ablauf zu gewährleisten.</p>
                </div>
                <MDBBtn color="orange" size="lg" type="submit">
                  Absenden
                </MDBBtn>
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
