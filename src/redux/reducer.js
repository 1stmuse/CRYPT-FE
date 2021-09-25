const initialState = {
  user: {
    firstname: "",
    lastname: "",
    token: null,
    isAdmin: false,
    id: "",
  },
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
    //   break;

    default:
      return state;
    //   break;
  }
};
