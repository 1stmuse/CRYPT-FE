import React from "react";
import reducer from "./reducer";
import usePortal from "react-useportal";
import Modal from "./index";

const stateInit = {
  show: false,
};

export const ModalContext = React.createContext(stateInit);

const ModalWrapper = ({ children }) => {
  const [state, dispatch] = React.useReducer(reducer, stateInit);
  const { Portal } = usePortal();
  const hide = () => dispatch({ type: "HIDE_MODAL" });

  return (
    <ModalContext.Provider value={{ ...state, dispatch, hide }}>
      {children}
      <Portal>{state.show && <Modal />}</Portal>
    </ModalContext.Provider>
  );
};

export default ModalWrapper;
