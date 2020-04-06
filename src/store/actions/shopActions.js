export const checkName = name => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    console.log(name);
    const firebase = getFirebase();
    const firestore = getFirestore();

    firestore
      .collection("partners")
      .get()
      .then(querySnapshot => {
        let result = undefined;
        let found = false;
        querySnapshot.forEach(function(doc) {
          // doc.data() is never undefined for query doc snapshots
          result = doc.data();
          if (result) {
            if (result.shop.name === name.toLowerCase()) {
              found = true;
            }
          }
        });
        if (found) {
          dispatch({
            type: "SHOP_FOUND"
          });
        } else {
          dispatch({
            type: "SHOP_NOTFOUND"
          });
        }
      });
  };
};

export const getUsers = () => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firebase = getFirebase();
    const firestore = getFirestore();

    console.log("Reached");

    firestore
      .collection("partners")
      .get()
      .then(querySnapshot => {
        let users = querySnapshot.docs.map(doc => {
          let data = doc.data();
          data.uid = doc.id;
          return data;
        });
        console.log("Users", users);
        dispatch({
          type: "GETUSERS_SUCCESS",
          users
        });
      })
      .catch(err => {
        dispatch({
          type: "GETUSERS_ERROR",
          err
        });
      });
  };
};

export const verifyUser = uid => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firebase = getFirebase();
    const firestore = getFirestore();

    firestore
      .collection("partners")
      .doc(uid)
      .set(
        {
          verified: true
        },
        { merge: true }
      )
      .then(() => {
        firestore
          .collection("partners")
          .get()
          .then(querySnapshot => {
            let users = querySnapshot.docs.map(doc => {
              let data = doc.data();
              data.uid = doc.id;
              return data;
            });
            dispatch({
              type: "GETUSERS_SUCCESS",
              users
            });
          })
          .catch(err => {
            dispatch({
              type: "GETUSERS_ERROR",
              err
            });
          });
      })
      .catch(err => {
        dispatch({ type: "VERIFY_ERROR", err });
      });
  };
};

export const configVouchers = (uid, hasDigital, hasPhysical) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firebase = getFirebase();
    const firestore = getFirestore();

    firestore
      .collection("partners")
      .doc(uid)
      .set(
        {
          shop: {
            configured: true,
            hasDigital: hasDigital !== undefined ? hasDigital : false,
            hasPhysical: hasPhysical !== undefined ? hasPhysical : false,
          }
        },
        { merge: true }
      )
      .then(() => {
        firestore
          .collection("partners")
          .get()
          .then(querySnapshot => {
            let users = querySnapshot.docs.map(doc => {
              let data = doc.data();
              data.uid = doc.id;
              return data;
            });
            dispatch({
              type: "GETUSERS_SUCCESS",
              users
            });
          })
          .catch(err => {
            dispatch({
              type: "GETUSERS_ERROR",
              err
            });
          });
      })
      .catch(err => {
        dispatch({ type: "CONFIGVOUCHERS_ERROR", err });
      });
  };
};

export const activateShop = uid => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firebase = getFirebase();
    const firestore = getFirestore();

    firestore
      .collection("partners")
      .doc(uid)
      .set(
        {
          shop: {
            active: true
          }
        },
        { merge: true }
      )
      .then(() => {
        firestore
          .collection("partners")
          .get()
          .then(querySnapshot => {
            let users = querySnapshot.docs.map(doc => {
              let data = doc.data();
              data.uid = doc.id;
              return data;
            });
            dispatch({
              type: "GETUSERS_SUCCESS",
              users
            });
          })
          .catch(err => {
            dispatch({
              type: "GETUSERS_ERROR",
              err
            });
          });
      })
      .catch(err => {
        dispatch({ type: "OPENSHOP_ERROR", err });
      });
  };
};

export const closeShop = uid => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firebase = getFirebase();
    const firestore = getFirestore();

    firestore
      .collection("partners")
      .doc(uid)
      .set(
        {
          shop: {
            active: false
          }
        },
        { merge: true }
      )
      .then(() => {
        firestore
          .collection("partners")
          .get()
          .then(querySnapshot => {
            let users = querySnapshot.docs.map(doc => {
              let data = doc.data();
              data.uid = doc.id;
              return data;
            });
            dispatch({
              type: "GETUSERS_SUCCESS",
              users
            });
          })
          .catch(err => {
            dispatch({
              type: "GETUSERS_ERROR",
              err
            });
          });
      })
      .catch(err => {
        dispatch({ type: "OPENSHOP_ERROR", err });
      });
  };
};

export const banUser = uid => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firebase = getFirebase();
    const firestore = getFirestore();

    firestore
      .collection("partners")
      .doc(uid)
      .set(
        {
          banned: true
        },
        { merge: true }
      )
      .then(() => {
        firestore
          .collection("partners")
          .get()
          .then(querySnapshot => {
            let users = querySnapshot.docs.map(doc => {
              let data = doc.data();
              data.uid = doc.id;
              return data;
            });
            dispatch({
              type: "GETUSERS_SUCCESS",
              users
            });
          })
          .catch(err => {
            dispatch({
              type: "GETUSERS_ERROR",
              err
            });
          });
      })
      .catch(err => {
        dispatch({ type: "BAN_ERROR", err });
      });
  };
};

/**
 * SPDX-License-Identifier: (EUPL-1.2)
 * Copyright © 2019 Christian Aichner
 */
