//> React
// Contains all the functionality necessary to define React components
import React from "react";
// Router
import { Link, Redirect, withRouter } from "react-router-dom";

//> Additional modules
// Firebase
import firebase from "firebase";

//> Redux
// Connect
import { connect } from "react-redux";
// Actions
import { signOut } from "../../../store/actions/authActions";
import {
  getUsers,
  verifyUser,
  banUser,
  activateShop,
  closeShop,
} from "../../../store/actions/shopActions";

//> MDB
// "Material Design for Bootstrap" is a great UI design framework
import {
  MDBContainer,
  MDBDataTable,
  MDBRow,
  MDBCol,
  MDBPopover,
  MDBPopoverHeader,
  MDBPopoverBody,
  MDBModal,
  MDBModalHeader,
  MDBModalBody,
  MDBModalFooter,
  MDBBtn,
  MDBBadge,
  MDBIcon,
  MDBSpinner,
} from "mdbreact";
import { Radar } from "react-chartjs-2";

//> Components
import { Coach, Customer, FormCat } from "../../organisms";

//> CSS
// Profile page
import "./managepage.scss";

//> Images
import { ReactComponent as MorningImg } from "../../../assets/icons/morning.svg";
import { ReactComponent as DayImg } from "../../../assets/icons/day.svg";
import { ReactComponent as NightImg } from "../../../assets/icons/night.svg";

class ProfilePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      page: null,
      fetchFor: undefined,
      data: {
        columns: [
          {
            label: "Name",
            field: "name",
            sort: "asc"
          },
          {
            label: "Company",
            field: "company",
            sort: "asc"
          },
          {
            label: "Info",
            field: "contact",
            sort: "asc"
          },
          {
            label: "Status",
            field: "status",
            sort: "disabled"
          },
          {
            label: "Actions",
            field: "actions",
            sort: "disabled"
          }
        ],
        rows: undefined
      }
    };
  }

  componentDidMount = () => {
    this.getGreetingImg();
  };

  componentWillReceiveProps(nextProps) {
    // Check if users have changed
    if (JSON.stringify(this.props.users) !== JSON.stringify(nextProps.users)) {
      nextProps.users && this.setState({sync: false}, () => this.fillTable(nextProps.users));
    } else {
      this.setState({sync: false});
    }
  }

  toggle = user => {
    if (!this.state.modal) {
      this.setState({
        modal: true,
        modalUser: {
          name: user.first_name + " " + user.last_name,
          company: user.company.name,
          uid: user.uid
        }
      });
    } else {
      this.setState({
        modal: false,
        modalUser: undefined
      });
    }
  };

  getGreetingTxt = () => {
    // Get date
    let today = new Date();
    // Get current hours
    let curHr = today.getHours();

    // Store selected greeting
    let selected = null;

    if (curHr < 11) {
      selected = <span>Guten Morgen</span>;
    } else if (curHr < 18) {
      selected = <span>Willkommen zurück</span>;
    } else {
      selected = <span>Guten Abend</span>;
    }

    return selected;
  };

  getGreetingImg = () => {
    // Get date
    let today = new Date();
    // Get current hours
    let curHr = today.getHours();

    if (curHr < 11) {
      this.setState({ greetingImage: <MorningImg className="img-fluid" /> });
    } else if (curHr < 18) {
      this.setState({ greetingImage: <DayImg className="img-fluid" /> });
    } else {
      this.setState({ greetingImage: <NightImg className="img-fluid" /> });
    }
  };

  getUserList = (users) => {
    return users && users.map((user, i) => {
      if (!user.admin && !user.banned) {
        console.log(user);
        return {
          name: user.first_name + " " + user.last_name,
          company: user.company.name,
          contact: (
            <>
              <p>
                <a href={"mailto:" + user.email}>{user.email}</a>
              </p>
              {user.phone ? <p>{user.phone}</p> : null}
              {user.shop.active ? (
                <p>
                  <a
                    href={"https://g2g.at/" + user.shop.name}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {"www.g2g.at/" + user.shop.name}
                  </a>
                </p>
              ) : null}
            </>
          ),
          status: (
            <>
              {user.verified ? (
                <MDBBadge color="success">Verified</MDBBadge>
              ) : (
                <MDBBadge color="danger">Not verified</MDBBadge>
              )}
              {user.shop.active ? (
                <MDBBadge color="success">Shop active</MDBBadge>
              ) : (
                <MDBBadge color="warning">Shop inactive</MDBBadge>
              )}
            </>
          ),
          actions: (
            <>
              {!user.verified && (
                <MDBBtn
                  color="success"
                  className="px-3 m-0 mr-2"
                  size="sm"
                  onClick={() => this.props.verifyUser(user.uid)}
                >
                  <MDBIcon icon="check" />
                  Verify
                </MDBBtn>
              )}
              {user.shop.active && user.verified && (
                <MDBBtn color="info" className="px-3 m-0 mr-2" size="sm" disabled>
                  <MDBIcon far icon="credit-card" />
                  Buchung
                </MDBBtn>
              )}
              {!user.shop.active && user.verified && (
                <MDBBtn 
                color="green"
                className="px-3 m-0 mr-2"
                size="sm"
                onClick={() => this.props.activateShop(user.uid)}
                >
                  <MDBIcon icon="shopping-bag" />
                  Activate shop
                </MDBBtn>
              )}
              <MDBPopover placement="right" popover clickable id="popper1">
                <MDBBtn
                  className="px-3 m-0 float-right"
                  color="elegant"
                  outline
                  size="sm"
                >
                  <MDBIcon icon="ellipsis-h" size="md" className="m-0" />
                </MDBBtn>
                <div>
                  <MDBPopoverHeader>More</MDBPopoverHeader>
                  <MDBPopoverBody>
                    {user.verified && (
                      <MDBBtn
                        className="w-100"
                        color="primary"
                        size="sm"
                        onClick={() => this.toggleEdit(user)}
                        disabled
                      >
                        <MDBIcon icon="edit" />
                        Edit shop
                      </MDBBtn>
                    )}
                    {user.verified && user.shop.active && (
                      <MDBBtn
                        className="w-100"
                        color="red"
                        size="sm"
                        onClick={() => this.props.closeShop(user.uid)}
                      >
                        <MDBIcon icon="shopping-bag" />
                        Close shop
                      </MDBBtn>
                    )}
                    <MDBBtn
                      className="w-100"
                      color="danger"
                      size="sm"
                      onClick={() => this.toggle(user)}
                    >
                      <MDBIcon icon="ban" />
                      Ban
                    </MDBBtn>
                  </MDBPopoverBody>
                </div>
              </MDBPopover>
            </>
          )
        };
      }
    });
  };

  fillTable = (users) => {
    this.setState({
      data: {
        ...this.state.data,
        rows: this.getUserList(users)
      }
    });
  };

  render() {
    const { auth, profile, users } = this.props;

    // Check if firebase has loaded profile data
    if(!profile.isLoaded){
      return (
        <MDBContainer className="flex-center my-5 py-5">
          <MDBSpinner />
        </MDBContainer>
      );
    } else {
      // Check if logged in
      if (auth.uid === undefined) return <Redirect to="/" />;
      if (profile && !profile.admin) return <Redirect to="/" />;

      // Get firebase users
      if (!this.props.users) {
        this.props.getUsers();
      } else {
        if (!this.state.data.rows) {
          this.fillTable();
        }
      }

      return (
        <div id="profile">
          <div className="greeting py-5 text-center">
            {this.state.greetingImage}
            <h2 className="text-center font-weight-bold">
              {this.getGreetingTxt()} <span>{profile.first_name}</span>!
            </h2>
            <Link to="../">
              <MDBBtn color="white" outline>
                Homepage
              </MDBBtn>
            </Link>
            <MDBBtn color="white" outline onClick={() => this.props.signOut()}>
              Sign Out
            </MDBBtn>
          </div>
          <div className="mb-4 py-4 greeting-actions">
            <MDBContainer>
              <MDBRow className="flex-center text-center">
                <MDBCol md="4">
                  <p className="lead">
                    <MDBIcon icon="bolt" className="pr-2 orange-text" />
                    Quick actions
                  </p>
                </MDBCol>
                <MDBCol md="8">
                {!this.state.sync ? (
                  <MDBBtn 
                  color="white"
                  onClick={() => {
                    this.setState({sync: true}, () => this.props.getUsers())
                  }}
                  >
                    <MDBIcon icon="sync-alt" />
                    Reload
                  </MDBBtn>
                ) : (
                  <MDBBtn 
                  color="white"
                  disabled
                  >
                    <MDBIcon icon="sync-alt fa-spin" />
                    Reloading
                  </MDBBtn>
                )}
                  <a
                    href="https://console.firebase.google.com/u/0/project/gutschein2go/overview"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <MDBBtn color="warning">
                      <MDBIcon fab icon="google" />
                      Firebase
                    </MDBBtn>
                  </a>
                  <a
                    href="https://outlook.office.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <MDBBtn color="primary">
                      <MDBIcon fab icon="microsoft" />
                      MS Office
                    </MDBBtn>
                  </a>
                  <a
                    href="https://gutschein2go.myshopify.com/admin"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <MDBBtn color="green">
                      <MDBIcon fab icon="shopify" />
                      Shopify
                    </MDBBtn>
                  </a>
                </MDBCol>
              </MDBRow>
            </MDBContainer>
          </div>
          <MDBContainer>
            <MDBDataTable
              striped
              bordered
              exportToCSV
              entriesOptions={[10, 20, 50, 100]}
              data={this.state.data}
            />
          </MDBContainer>
          {this.state.modalUser && (
            <MDBModal
              modalStyle="danger"
              className="text-white"
              size="sm"
              backdrop={true}
              isOpen={this.state.modal}
              toggle={this.toggle}
            >
              <MDBModalHeader className="text-center" titleClass="w-100" tag="p">
                Are you sure?
              </MDBModalHeader>
              <MDBModalBody className="text-center">
                <p className="lead mb-0">
                  Ban partner <strong>{this.state.modalUser.name}</strong> from{" "}
                  <strong>{this.state.modalUser.company}</strong>?
                </p>
              </MDBModalBody>
              <MDBModalFooter className="justify-content-center">
                <MDBBtn
                  color="danger"
                  onClick={() => {
                    this.toggle();
                    this.props.banUser(this.state.modalUser.uid)
                  }}
                >
                  <MDBIcon icon="ban" />
                  Yes
                </MDBBtn>
                <MDBBtn color="danger" outline onClick={this.toggle}>
                  No
                </MDBBtn>
              </MDBModalFooter>
            </MDBModal>
          )}
        </div>
      );
    }
  }
}

const mapStateToProps = state => {
  console.log(state);
  return {
    auth: state.firebase.auth,
    profile: state.firebase.profile,
    users: state.shop.users
  };
};

const mapDispatchToProps = dispatch => {
  return {
    signOut: () => dispatch(signOut()),
    getUsers: () => dispatch(getUsers()),
    verifyUser: uid => dispatch(verifyUser(uid)),
    banUser: uid => dispatch(banUser(uid)),
    activateShop: uid => dispatch(activateShop(uid)),
    closeShop: uid => dispatch(closeShop(uid)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(ProfilePage));

/**
 * SPDX-License-Identifier: (EUPL-1.2)
 * Copyright © 2019 Christian Aichner
 */
