export default (state, action) => {
  switch (action.type) {
    case "HIDE_MODAL":
      return {
        ...state,
        show: false,
      };
    case "SHOW_MODAL":
      return {
        ...state,
        show: true,
        component: action.payload.component,
      };

    default:
      return state;
  }
};
