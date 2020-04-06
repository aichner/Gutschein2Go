//> React
// Contains all the functionality necessary to define React components
import React from "react";
// React Router
import { Link } from "react-router-dom";

//> MDB
// "Material Design for Bootstrap" is a great UI design framework
import {
  MDBCarousel,
  MDBCarouselInner,
  MDBCarouselItem,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardImage,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBBadge,
  MDBBtn,
  MDBIcon,
} from "mdbreact";

//> CSS
import "./shopcarousel.scss";

class ShopCarousel extends React.Component {
  render() {
    return (
      <MDBContainer id="shopcarousel">
        <MDBCarousel
          activeItem={1}
          length={1}
          slide={true}
          showControls={true}
          showIndicators={true}
          multiItem
        >
          <MDBCarouselInner>
            <MDBRow>
              <MDBCarouselItem itemId="1">
                <MDBCol md="4">
                  <MDBCard className="mb-2">
                    <MDBCardBody>
                      <MDBCardTitle>Bäckeria</MDBCardTitle>
                      <MDBCardText>Frühstückslokal</MDBCardText>
                      <div className="mb-3">
                        <small>Verfügbare Gutscheintypen</small>
                        <div>
                          <MDBBadge color="green">
                            <MDBIcon icon="euro-sign" size="lg" />
                            Wergutscheine
                          </MDBBadge>
                          <MDBBadge color="green">
                            <MDBIcon icon="box-open" size="lg" />
                            Produktgutscheine
                          </MDBBadge>
                        </div>
                        <small>Einlösbarkeit</small>
                        <div>
                          <MDBBadge color="elegant-color">
                            <MDBIcon icon="mobile-alt" size="lg" />
                            Digital
                          </MDBBadge>
                          <MDBBadge color="elegant-color">
                            <MDBIcon icon="award" size="lg" />
                            Physikalisch
                          </MDBBadge>
                        </div>
                      </div>
                      <MDBBtn color="elegant" disabled>
                        Shop now
                      </MDBBtn>
                    </MDBCardBody>
                  </MDBCard>
                </MDBCol>
                <MDBCol md="4">
                  <MDBCard className="mb-2">
                    <MDBCardBody>
                      <MDBCardTitle>STERN</MDBCardTitle>
                      <MDBCardText>Restaurant</MDBCardText>
                      <MDBBtn color="elegant">Shop now</MDBBtn>
                    </MDBCardBody>
                  </MDBCard>
                </MDBCol>
                <MDBCol md="4">
                  <MDBCard className="mb-2">
                    <MDBCardBody>
                      <MDBCardTitle>Bäckeria</MDBCardTitle>
                      <MDBCardText>Frühstückslokal</MDBCardText>
                      <MDBBtn color="elegant">Shop now</MDBBtn>
                    </MDBCardBody>
                  </MDBCard>
                </MDBCol>
              </MDBCarouselItem>
            </MDBRow>
          </MDBCarouselInner>
        </MDBCarousel>
      </MDBContainer>
    );
  }
}

export default ShopCarousel;

/**
 * SPDX-License-Identifier: (EUPL-1.2)
 * Copyright © 2019 Werbeagentur Christian Aichner
 */
