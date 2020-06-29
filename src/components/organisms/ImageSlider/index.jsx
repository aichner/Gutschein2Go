//#region > Imports
//> React
// Contains all the functionality necessary to define React components
import React, { Component } from "react";

//> MDB
// "Material Design for Bootstrap" is a great UI design framework
import {
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

//> Images
import hotelPic from "../../../assets/content/barista.jpg";
import restaurantPic from "../../../assets/content/bread.jpg";
import cafePic from "../../../assets/content/shop.jpg";

//> Stylesheet
import "./imageslider.scss";
//#endregion

//#region > Components
class ImageSlider extends Component {
  state = {};
  render() {
    return (
      <div id="imageslider">
        <MDBCarousel
          activeItem={1}
          length={3}
          showControls={false}
          showIndicators={false}
          className="z-depth-1"
          slide
        >
          <MDBCarouselInner>
            <MDBCarouselItem itemId="1">
              <MDBView>
                <img className="d-block w-100" src={hotelPic} alt="Hotels" />
                <MDBMask overlay="blue-light" />
              </MDBView>
              <MDBCarouselCaption>
                <h2 className="h3-responsive">Hotels</h2>
              </MDBCarouselCaption>
            </MDBCarouselItem>
            <MDBCarouselItem itemId="2">
              <MDBView>
                <img
                  className="d-block w-100"
                  src={restaurantPic}
                  alt="Restaurants"
                />
                <MDBMask overlay="blue-light" />
              </MDBView>
              <MDBCarouselCaption>
                <h2 className="h3-responsive">Restaurants</h2>
              </MDBCarouselCaption>
            </MDBCarouselItem>
            <MDBCarouselItem itemId="3">
              <MDBView>
                <img className="d-block w-100" src={cafePic} alt="Cafés" />
                <MDBMask overlay="blue-light" />
              </MDBView>
              <MDBCarouselCaption>
                <h2 className="h3-responsive">Cafés</h2>
              </MDBCarouselCaption>
            </MDBCarouselItem>
          </MDBCarouselInner>
        </MDBCarousel>
        <div className="toppicks">
          <MDBBtn size="md" color="blue" rounded>
            Our Top Picks
          </MDBBtn>
          <MDBIcon icon="angle-down" />
        </div>
      </div>
    );
  }
}

export default ImageSlider;
//#endregion

/**
 * SPDX-License-Identifier: (EUPL-1.2)
 * Copyright © 2020 Werbeagentur Christian Aichner
 */
