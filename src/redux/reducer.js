import { combineReducers } from "redux";

const initialState = {
  user: {
    firstname: "",
    lastname: "",
    token: null,
    isAdmin: false,
    id: "",
  },
};

const navState = {
  open: false,
  smOpen: false,
};

export const navReducer = (state = navState, action) => {
  switch (action.type) {
    case "TOGGLE_NAV":
      return {
        ...state,
        open: !state.open,
      };

    case "SM_TOGGLE_NAV":
      return {
        ...state,
        smOpen: !state.smOpen,
      };

    default:
      return state;
    // break;
  }
};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOGIN":
      return {
        ...state,
        user: {
          ...action.payload,
        },
      };
    //   break;
    case "LOGOUT":
      return {
        ...state,
        user: {
          ...state.user,
          token: "",
        },
      };

    default:
      return state;
    //   break;
  }
};

const rootReducer = combineReducers({
  user: userReducer,
  nav: navReducer,
});

export default rootReducer;
