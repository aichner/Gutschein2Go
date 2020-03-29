import React, { Component } from 'react';
import { MDBContainer, MDBBtn, MDBModal, MDBModalBody, MDBIcon, MDBRow } from 'mdbreact';

class ModalPage extends Component {
state = {
  modal1: localStorage.getItem("cookie") ? false : true
}

toggle = nr => () => {
  let modalNumber = 'modal' + nr
  this.setState({
    [modalNumber]: !this.state[modalNumber]
  }, () => {
    if(!localStorage.getItem("cookie")){
      localStorage.setItem("cookie", true);
    }
  });
}

render() {
  return (
      <MDBModal isOpen={this.state.modal1} toggle={this.toggle(1)} frame position="bottom">
        <MDBModalBody className="text-center">
          <MDBRow className="justify-content-center align-items-center">
            <p className="pt-3 pr-2">
            Wir verwenden Cookies, um die Funktionsfähigkeit der Website aufrecht zu erhalten.
            </p>
            <MDBBtn color="orange" onClick={this.toggle(1)}>Ok, danke</MDBBtn>
          </MDBRow>
        </MDBModalBody>
      </MDBModal>
    );
  }
}

export default ModalPage;