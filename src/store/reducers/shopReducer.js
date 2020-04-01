// Have initial state for when state is not ready to be passed
const initState = {
  shopError: null,
  users: null,
};

const shopReducer = (state = initState, action) => {
  switch (action.type) {
    case "SHOP_NOTFOUND":
      console.log("Shop not found", action.err);
      return {
        ...state,
        shopError: true
      };
    case "SHOP_FOUND":
      console.log("Shop found");
      return {
        ...state,
        shopError: false
      };
    case "GETUSERS_ERROR":
      console.log("Could not get users.",action.err);
      return {
        ...state,
        shopError: true,
        users: false,
      };
    case "GETUSERS_SUCCESS":
      console.log("Got users.");
      return {
        ...state,
        shopError: false,
        users: action.users
      };
    case "BAN_SUCCESS":
      console.log("Banned user.");
      return {
        ...state,
        shopError: false,
      };
    case "BAN_ERROR":
      console.log("Failed to ban user.", action.err);
      return {
        ...state,
        shopError: true,
        users: action.err
      };
    default:
      return state;
  }
};

export default shopReducer;

/**
 * SPDX-License-Identifier: (EUPL-1.2)
 * Copyright © 2019 Werbeagentur Christian Aichner
 */
