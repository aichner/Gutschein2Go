//#region > Imports
//> React
// Contains all the functionality necessary to define React components
import React from "react";
// React Router
import { Link, withRouter } from "react-router-dom";

//> Additional
// Changing words animation
import TextLoop from "react-text-loop";

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

//> Images
import baristaBg from "../../../assets/content/barista.jpg";
import breadBg from "../../../assets/content/bread.jpg";
import shopBg from "../../../assets/content/shop.jpg";
import { ReactComponent as SetupImg } from "../../../assets/content/svg/setup.svg";
import { ReactComponent as GiftImg } from "../../../assets/content/svg/gift.svg";
import { ReactComponent as DeployImg } from "../../../assets/content/svg/deploy.svg";
import { ReactComponent as ShopImg } from "../../../assets/content/svg/shop.svg";
import { ReactComponent as VaultImg } from "../../../assets/content/svg/vault.svg";
import { ReactComponent as PartyImg } from "../../../assets/content/svg/party.svg";
//#endregion

//#region > Functions
// Get random Int from the background pictures array
function getRandomInt() {
  return Math.floor(Math.random() * Math.floor(backgroundPictures.length));
}

function shuffle(array) {
  var currentIndex = array.length,
    temporaryValue,
    randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

//#endregion

//#region > Constant Variables
// Load images
const backgroundPictures = [baristaBg, breadBg, shopBg];
// Get randomized image
const randomBG = backgroundPictures[getRandomInt()];
//#endregion

//#region > Data
const vouchers = [
  {
    msg: "Alles Gute zum Geburtstag",
    value: 50,
    name: "Geburtstag",
  },
  {
    msg: "Frohe Weihnachten",
    value: 80,
    name: "Weihnachten",
  },
  {
    msg: "Alles Liebe zum Valentienstag",
    value: 50,
    name: "Valentienstag",
  },
];

const names = [
  "Katharina",
  "Theresa",
  "Christian",
  "Hannah",
  "Noah",
  "Ben",
  "Paul",
  "Lina",
  "Klara",
  "Ella",
  "Marie",
  "Felix",
  "Finn",
  "Michael",
  "Michi",
  "Chris",
  "Christina",
  "Elias",
  "Jonas",
];
//#endregion

//#region > Components
class HomePage extends React.Component {
  render() {
    return (
      <div id="hero">
        <MDBView src={randomBG} fixed>
          <MDBMask overlay="black-light" />
          <MDBContainer
            style={{ height: "100%", width: "100%", paddingTop: "10rem" }}
            fluid
          >
            <MDBRow className="flex-center">
              <MDBCol
                md="4"
                className="white-text text-center text-md-left mb-5"
              >
                <h1 className="display-4 font-weight-bold">
                  Der perfekte Gutschein für jeden Anlass
                </h1>
                <h3>Persönlich, individuell & hochwertig</h3>
                <hr className="hr-light" />
                <h6 className="mb-4">
                  Verlieren Sie nicht Ihren Umsatz. Durch unseren
                  unkomplizierter Gutscheinvertrieb Service verkaufen wir Ihren
                  zukünftigen Kunden Gutscheine für nach der Krise.
                </h6>
                <MDBSmoothScroll
                  to="service"
                  offset={-150}
                  className="d-inline-block p-0 m-0"
                >
                  <MDBBtn color="white" size="lg">
                    <MDBIcon icon="angle-down" />
                    Mehr erfahren
                  </MDBBtn>
                </MDBSmoothScroll>
                <MDBSmoothScroll
                  to="faq"
                  offset={-150}
                  className="d-inline-block p-0 m-0"
                >
                  <MDBBtn color="white" outline size="lg">
                    <MDBIcon icon="question" />
                    FAQ
                  </MDBBtn>
                </MDBSmoothScroll>
              </MDBCol>
              <MDBCol md="6" className="mb-4 d-none d-sm-block">
                <MDBRow className="voucher-preview">
                  {vouchers.map((voucher, i) => {
                    return (
                      <MDBCol md="6" key={i}>
                        <MDBCard className="text-center">
                          <MDBCardBody>
                            <div
                              className={`img-left img-${voucher.name.toLowerCase()}`}
                            ></div>
                            <div className="content-right text-left p-3">
                              <p className="lead h4-responsive mb-0">
                                {voucher.msg},
                              </p>
                              <p className="lead h4-responsive">
                                <TextLoop interval={2000} delay={(i + 1) * 200}>
                                  {shuffle(names).map((name, n) => {
                                    return (
                                      <span key={i + "-" + n}>{name}</span>
                                    );
                                  })}
                                </TextLoop>
                              </p>
                              <p className="lead h1-responsive font-weight-bold">
                                € {voucher.value},-
                              </p>
                              <MDBBtn color="lightblue" size="md" rounded>
                                Konfigurieren
                              </MDBBtn>
                            </div>
                          </MDBCardBody>
                        </MDBCard>
                      </MDBCol>
                    );
                  })}
                  <MDBCol md="6">
                    <MDBCard className="text-center">
                      <MDBCardBody>
                        <div className="p-3 text-left">
                          <p className="lead">
                            Entdecken Sie mehr Möglichkeiten
                          </p>
                          <p className="text-muted pb-3">
                            Wir haben etwas für jeden Anlass.
                          </p>
                          <MDBBtn size="md" color="blue" rounded>
                            <MDBIcon icon="ticket-alt" className="pr-2" />
                            Gutschein aussuchen
                          </MDBBtn>
                          <MDBBtn size="md" color="blue" rounded>
                            <MDBIcon icon="signature" className="pr-2" />
                            Persönlichen Gutschein erstellen
                          </MDBBtn>
                        </div>
                      </MDBCardBody>
                    </MDBCard>
                  </MDBCol>
                </MDBRow>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        </MDBView>
        <section id="info">
          <MDBContainer className="py-5 mb-5 text-center text-white">
            <h2 className="font-weight-bold">Österreich hält zusammen!</h2>
            <p className="lead">
              Erwerben Sie jetzt Gutscheine, um Ihre lokalen Betriebe zu
              unterstützen und lösen Sie diese nach der Corona-Krise ein.
            </p>
            {/*<MDBBtn color="white" size="lg">
          Partnerbetriebe anzeigen
          </MDBBtn>*/}
          </MDBContainer>
        </section>
      </div>
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
