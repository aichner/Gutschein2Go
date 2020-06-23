export const signIn = (credentials) => {
  return (dispatch, getState, { getFirebase }) => {
    const firebase = getFirebase();

    firebase
      .auth()
      .signInWithEmailAndPassword(credentials.email, credentials.password)
      .then(() => {
        dispatch({
          type: "LOGIN_SUCCESS",
        });
      })
      .catch((err) => {
        dispatch({
          type: "LOGIN_ERROR",
          err,
        });
      });
  };
};

export const checkEmail = (email) => {
  return (dispatch, getState, { getFirebase }) => {
    const firebase = getFirebase();

    return firebase
      .auth()
      .fetchSignInMethodsForEmail(email)
      .then((res) => {
        if (res.length > 0) {
          return true;
        } else {
          return false;
        }
      })
      .catch((err) => {
        return false;
      });
  };
};

export const signInAnonymous = (credentials) => {
  return (dispatch, getState, { getFirebase }) => {
    const firebase = getFirebase();

    firebase
      .auth()
      .signInAnonymously()
      .then(() => {
        dispatch({
          type: "LOGIN_ANON_SUCCESS",
        });
      })
      .catch((err) => {
        dispatch({
          type: "LOGIN_ERROR",
          err,
        });
      });
  };
};

export const signOut = () => {
  return (dispatch, getState, { getFirebase }) => {
    const firebase = getFirebase();

    firebase
      .auth()
      .signOut()
      .then(() => {
        dispatch({
          type: "SIGNOUT_SUCCESS",
        });
      });
  };
};

export const signUp = (newUser) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firebase = getFirebase();
    const firestore = getFirestore();

    // Import sha256 hashing algorithm
    const sha256 = require("sha256");

    // Check if the user has entered a password. If not, create a password.
    const psw = newUser.password
      ? newUser.password
      : sha256(Math.random().toString(36));

    // Create partner object
    let partner = {
      first_name: newUser.first_name.trim(),
      last_name: newUser.last_name.trim(),
      email: newUser.email.trim(),
      phone: newUser.phone ? newUser.phone.trim() : null,
      company: {
        location: {
          address: newUser.company.location.address.trim(),
          city: newUser.company.location.city.trim(),
          state: newUser.company.location.state.trim(),
        },
        uid: newUser.company.uid ? newUser.company.uid.trim() : null,
        name: newUser.company.name.trim(),
      },
      verified: false,
      shop: {
        active: false,
        colors: {
          primary: "#ff8910",
          secondary: "#2e2e2e",
        },
        name: "",
      },
    };

    console.log(partner);

    // Create new user to firebase
    firebase
      .auth()
      .createUserWithEmailAndPassword(newUser.email, psw)
      .then((response) => {
        // Create data for user we just created
        return firestore
          .collection("partners")
          .doc(response.user.uid)
          .set(partner);
      })
      .then(() => {
        //firebase.auth().signOut();
        dispatch({
          type: "SIGNUP_SUCCESS",
        });
      })
      .catch((err) => {
        dispatch({
          type: "SIGNUP_ERROR",
          errCode: 1,
          err,
        });
      });
  };
};

/**
 * SPDX-License-Identifier: (EUPL-1.2)
 * Copyright © 2020 Werbeagentur Christian Aichner
 */
